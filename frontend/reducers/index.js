import { HYDRATE } from "next-redux-wrapper"

const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    }
}

//action을 만드는 함수 changeNickname.   정보수정이 필요할 때 dispatch를 통해서 action을 생성해주면 된다. ex) store.dispatch(changeNickname('lee'))
// const changeNickname = (data) => {
//     return {
//         type: 'CHANGE_NICKNAME',
//         data
//     }
// }
// store.dispatch(changeNickname('lee'))


export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}


//(이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload };

        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    user: action.data,
                    isLoggedIn: true,
                }
            }
        default:
            return state;
    }
}

export default rootReducer;