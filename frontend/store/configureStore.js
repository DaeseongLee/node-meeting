//중앙 데이터 저장소 할수 있는 것들: redux, apollo 등
//1.next에 redux를 설정하기 위해서 next-redux-wrapper라는 패키지를 사용함
//2.createWrapper로 wrapper를 만들어주자.
//3.리덕스의 원리 : 
// 중앙저장소를 하나 만들자.
// 데이터를 수정할 때 필요한 것이 action이다.type은 action의 이름이다.ex) { type: 'CHANGE_NICKNAME', data: 'boogicho' }
// action을 dispatch하는 순간, 중앙저장소의 데이터가 바뀐다. CHANGE_NICKNAME을 javascript가 이해를 못하기 때문에, 어떻게 바꿔줘야하는 지를 reducer에 적어준다.
// 단점 => 데이터를 수정하는 작업을 할때마다 action을 만들어 줘야 함. action을 만들면 대응하는 reducer를 만들어줘야함. 코드가 길어짐.
// 장점 => action 내역이 log로 다 남겨져있음. bug 잡기에 용이 하다.
// reducer에서 switch문에서 return 해줄 때, 객체를 새로 만들어준다. => 왜 새롭게 객체를 만들어줄까?? 장점에서 말한것처럼 history를 유지하기 위해서. 새로운 객체를 안만들면, 기존에 있던 객체에
// 덮어 씌여져서 history가 안남는다. 또한 바뀔 필요가 없는 것들은 참조 유지를 통해 메모리를 아낄수 있도록 ...state를 사용하자. ex)post:[{}, {}, {}]를 쓰면 action을 할 때마다 메모리를 쓰게 된다.
// but, ...state를 쓰면 참조를 통해서 접근하기 때문에 메모리를 아낄 수 있었다.


import { createWrapper } from "next-redux-wrapper";
import { compose, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers"

const configureStore = () => {
    const middlewares = [];
    //enhancer을 통해서 store의 기능을 확장해준다. ex) 이것을 통해서 브라우저에서 redux 툴을 사용할 수 잇다.
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares)) //배포할  때 devtool을 넣어준다. 브라우저 개발자도구와 연동이 된다.
    const store = createStore(reducer, enhancer); // store = state(중앙저장소) + reducer
    return store;
}

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' }); //debug가 true이면 좀더 redux에 관해서 자세한 설명이 나옴.

export default wrapper;