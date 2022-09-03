import * as React from "react";
import { useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Link, useParams } from "react-router-dom";

import {Chat} from "./chat"
import {ChatData} from "./chat-data"

export function ChatList() {
    const chatData = ChatData();

    const [chatList] = useState(chatData);
    const { chatId } = useParams();

    return (
        <List component="nav" dense sx={{ width: "100%", maxWidth: 360, bgcolor: "#17212b" }}>
            {chatList.map((chat) => {
                return (
                    <Link key={chat.name} to={`/chats/${chat.name}`}>
                        <Chat chat={chat} selected = {chat.name === chatId}/>
                    </Link>
                );
            })}
            <Divider variant="inset" component="li" />
        </List>
    );
}
