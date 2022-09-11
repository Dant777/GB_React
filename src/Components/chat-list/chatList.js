import * as React from "react";
import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import { Chat } from "./chat";

import { deleteConversation, createConversation } from "../../store/conversations";

export function ChatList() {
    const conversation = useSelector((state) => state.conversation.conversation);
    const { chatId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteConversationByName = useCallback(
        (name) => {
            dispatch(deleteConversation(name));
            setTimeout(() => navigate("/chats"));
        },
        [dispatch]
    );

    const createConversationByName = () => {
        const name = prompt("Введите имя: ");
        const isValidName = conversation.find(chat => chat.name === name);
        console.log("isValidName", isValidName);
        if (name && isValidName == null) {

            dispatch(createConversation(name));
        } else {

            alert("Не валидное имя");
        }
    };

    return (
        <List component="nav" dense sx={{ width: "100%", maxWidth: 360, bgcolor: "#17212b" }}>
            <button onClick={createConversationByName}>create chat</button>
            {conversation.map((chat) => {
                return (
                    <Link key={chat.name} to={`/chats/${chat.name}`}>
                        <Chat chat={chat} selected={chat.name === chatId} deleteConversationByName={deleteConversationByName} />
                    </Link>
                );
            })}
            <Divider variant="inset" component="li" />
        </List>
    );
}
