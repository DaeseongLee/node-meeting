export const initialState = {
    currentPage: "main",
}

const MAIN = 'MAIN';
const MY_MEETING = 'MY_MEETING';
const MORE = 'MORE';

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case MAIN:
            return {
                currentPage: "main",
            }
        case MY_MEETING:
            return {
                currentPage: "my_meeting"
            }
        case MORE:
            return {
                currentPage: "more"
            }
        default:
            return state;
    }
}

export default reducer