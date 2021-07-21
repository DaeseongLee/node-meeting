export const initialState = {
    currentPage: "main",
}

const MAIN = 'MAIN';
const MY_MEETING = 'MY_MEETING';
const MORE = 'MORE';
const POST = 'POST';
const ALBUM = 'ALBUM';
const CHAT = 'CHAT';

const reducer = (state = initialState, action) => {
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
        case POST:
            return {
                currentPage: "post"
            }
        case ALBUM:
            return {
                currentPage: "album"
            }
        case CHAT:
            return {
                currentPage: "chat"
            }
        default:
            return state;
    }
}

export default reducer