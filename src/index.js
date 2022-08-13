import {MessageList, Layout, Header, ChatList } from './Components';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "./global.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Layout messages={<MessageList/>} header={<Header/>} chats={<ChatList/>}/>
    // <App/>
  //</React.StrictMode>
);


