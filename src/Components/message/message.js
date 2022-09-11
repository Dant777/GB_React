import className from "classnames";
import {useDispatch} from "react-redux"
import { deleteMessage } from "../../store/messages";
import styles from "./message.module.css";


function Message({ message, chatId }) {

    const  dispatch = useDispatch();
    return (
        <div
            className={className(styles.message, {
                [styles.currentMessage]: message.author === "User"
            })}
        >
            <h3>{message.message}</h3>
            <p>{message.author}</p>
            <p>{message.date}</p>
            <button onClick={()=> dispatch(deleteMessage(chatId ,message.id))}>x</button>
        </div>
    );
}
export default Message;
