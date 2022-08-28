import { MessageList, Layout, Header, ChatList } from "./Components";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "./global.css";
import { ChatData } from "./Components/chat-list";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout 
        messages={<MessageList />} 
        header={<Header />} 
        chats={<ChatList chatData={ChatData()}/>} />);
