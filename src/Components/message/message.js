import className from "classnames";
import styles from "./message.module.css";

function Message({ message }) {
    return (
        <div
            className={className(styles.message, {
                [styles.currentMessage]: message.author === "User"
            })}
        >
            <h3>{message.message}</h3>
            <p>{message.author}</p>
            <p>{message.date}</p>
        </div>
    );
}
export default Message;
