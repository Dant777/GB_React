import { DELETE_CON, CREATE_CON } from "./types";

const initialState = {
     conversation: [
        {
            name: "chat1"
        },
        {
            name: "chat2"
        },
        {
            name: "chat3"
        },
        {
            name: "chat4"
        }
    ]
};

export const conversationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CON:
            return {...state, conversation: [...state.conversation, {name: action.payload}]}

        case DELETE_CON:
            return {...state,  
            conversation: state.conversation.filter(conversation => conversation.name !== action.payload) }
            
        default:
            return state;
    }
};
