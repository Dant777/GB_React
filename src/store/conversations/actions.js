import { DELETE_CON, CREATE_CON } from "./types"

export const createConversation = (conversation) =>({
     type:CREATE_CON, payload: conversation
});

export const deleteConversation = (conversation) =>({
    type:DELETE_CON, payload: conversation
});