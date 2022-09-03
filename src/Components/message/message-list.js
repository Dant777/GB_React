import React, { useState, useEffect, useRef, useCallback } from "react";
import Message from "./message";
import { Input as MuiInput, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import styled from '@emotion/styled'
import { useParams } from "react-router-dom";

const Input = styled(MuiInput)`
    color: #9a9fa1;
    padding: 10px;
    font-size: 15px;

`;
export const SendIcon = styled(Send)`
  cursor: pointer;
  color: #2b5278;
`;

export const MessageList = () => {
    const [msgList, setMsgList] = useState({
        chat1: [{ author: "User", message: "test", date: new Date().toUTCString() }],
      });
    const [value, setValue] = useState("");

    const ref = useRef();
    const { chatId } = useParams();
    
    
    const sendMessage = useCallback(
        (message, author = "User") => {
          if (message) {
            setMsgList((state) => ({
              ...state,
              [chatId]: [
                ...(state[chatId] ?? []),
                { author, message, date: new Date().toUTCString() },
              ],
            }));
            setValue("");
          }
        },
        [chatId]
      );

    const handlePressInput = ({ code }) => {
        if (code === "Enter") {
            sendMessage(value);
        }
    };

    useEffect(() => {
        if (ref.current) {
          ref.current.scrollTo({
            top: ref.current.scrollHeight,
            left: 0,
            behavior: "smooth",
          });
        }
      }, [msgList]);

      useEffect(() => {
        const messages = msgList[chatId] ?? [];
        const lastMessage = messages[messages.length - 1];
        let timerId = null;
    
        if (messages.length && lastMessage.author === "User") {
          timerId = setTimeout(() => {
            sendMessage("I'm bot", "Bot");
          }, 500);
    
          return () => {
            clearInterval(timerId);
          };
        }
      }, [msgList, chatId, sendMessage]);

    const messages = msgList[chatId] ?? [];

    return (
        <>
            <div ref={ref}>
                {messages.map((message, index) => (
                    <Message message={message} key={index} />
                ))}
            </div>

            <Input
                fullWidth 
                placeholder="Введите сообщение..."
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={handlePressInput} 
                endAdornment={<InputAdornment position="end">{value && <SendIcon onClick={sendMessage} />}</InputAdornment>} />
        </>
    );
};
