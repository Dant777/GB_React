import React, { useState, useEffect } from "react";
import Message from "./message";

export const MessageList = () => {
    const [msgList, setMsgList] = useState([]);
    const [value, setValue] = useState("");

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
            <div>
                {msgList.map((message, index) => (
                    <Message message={message} key={index} />
                ))}
            </div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} onKeyPress={handlePressInput}/>
            <button onClick={sendMessage}>send</button>
        </>
    );
};
