import MessageBar from "../MessageBar/Index";
import Message from "../Message/Index";
import styles from "./index.module.scss";

const MessagesList = () => {

  return (
    <div className={styles.MessagesList}>
      <div className={styles.messages}>
        <Message/>
        <Message/>
        <Message/>
      </div>
      <MessageBar/>
    </div>
)}; 

export default MessagesList;