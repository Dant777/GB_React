import { nanoid } from "nanoid";
import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";

const initialState = {
    message: {
        chat1: [
            { author: "User", message: "test", date: new Date().toUTCString(), id: nanoid() },
            { author: "Bot", message: "test", date: new Date().toUTCString(), id: nanoid() }
        ]
    }
};

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return { ...state, 
                message: { ...state.message, 
                    [action.payload.chatId]: [
                        ...(state.message[action.payload.chatId] ?? []),
                         { ...action.payload.message, id: nanoid(), date: new Date().toUTCString() }] } };

        case DELETE_MESSAGE:
            return { ...state,
            message:{
                ...state.message,
                [action.payload.chatId]: state.message[action.payload.chatId].filter((message) =>
                     message.id !== action.payload.messageId)
            } };

        default:
            return state;
    }
};
