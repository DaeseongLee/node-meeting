import { HYDRATE } from "next-redux-wrapper" //redux 서버사이드랜더링을 위해서 HYDATE를 사용한다.
import { combineReducers } from "redux";

import user from './user';


//(이전상태, 액션) => 다음상태
// const rootReducer = (state = initialState, action) => {
const rootReducer = combineReducers({//combineReducers는 reducer끼리 합쳐준다.
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user
});

export default rootReducer;