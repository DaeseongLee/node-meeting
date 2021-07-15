export const initialState = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
}

const LOG_IN = 'LOG_IN';
const CREATE_ACCOUNT = 'CREATE_ACCOUNT';

export const loginAction = (data) => {
    return {
        type: LOG_IN,
        data,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                user: action.data,
                isLoggedIn: true,
            }
        case CREATE_ACCOUNT:
            return {
                ...state,
                user: action.data,
                signUpData: action.data,
            }
        default:
            return state;
    }
}

export default reducer