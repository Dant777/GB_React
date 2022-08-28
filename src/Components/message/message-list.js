import React, { useState, useEffect, useRef } from "react";
import Message from "./message";
import { Input as MuiInput, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import styled from '@emotion/styled'

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
    const [msgList, setMsgList] = useState([]);
    const [value, setValue] = useState("");

    const ref = useRef();

    const sendMessage = () => {
        if (value) {
            const date = new Date();
            setMsgList([...msgList, { author: "User", message: value, date: date.toUTCString() }]);
            setValue("");
        }
    };

    const handlePressInput = ({ code }) => {
        if (code === "Enter") {
            sendMessage();
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
        const lastMsg = msgList[msgList.length - 1];

        let timerId = null;

        if (msgList.length && lastMsg.author === "User") {
            const date = new Date();
            timerId = setTimeout(() => {
                setMsgList([...msgList, { author: "Bot", message: "Txt by Bot", date: date.toUTCString() }]);
            }, 500);

            return () => {
                clearInterval(timerId);
            };
        }
    }, [msgList]);

    return (
        <>
            <div ref={ref}>
                {msgList.map((message, index) => (
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
