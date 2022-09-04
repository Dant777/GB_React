import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Input as MuiInput, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import styled from '@emotion/styled'

import Message from "./message";

import { sendMessageWithBot } from "../../store/messages";

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
    const  dispatch = useDispatch();
    const { chatId } = useParams();
    const messages = useSelector((state) => {
        return state.message.message[chatId] ?? []
    });

    const [value, setValue] = useState("");

    const ref = useRef();
    
    
    const send = useCallback(
        (message, author = "User") => {
          if (message) {
            dispatch(sendMessageWithBot(chatId, {message, author}));
            setValue("");
          }
        },
        [chatId, dispatch]
      );

    const handlePressInput = ({ code }) => {
        if (code === "Enter") {
            send(value);
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
      }, [messages]);

      useEffect(() => {

        const lastMessage = messages[messages.length - 1];
        let timerId = null;
    
        if (messages.length && lastMessage.author === "User") {
          timerId = setTimeout(() => {
            send("I'm bot", "Bot");
          }, 500);
    
          return () => {
            clearInterval(timerId);
          };
        }
      }, [send, messages]);


    return (
        <>
            <div ref={ref}>
                {messages.map((message, index) => (
                    <Message message={message} chatId={chatId} key={index} />
                ))}
            </div>

            <Input
                fullWidth 
                placeholder="Введите сообщение..."
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={handlePressInput} 
                endAdornment={<InputAdornment position="end">{value && <SendIcon onClick={send} />}</InputAdornment>} />
        </>
    );
};
