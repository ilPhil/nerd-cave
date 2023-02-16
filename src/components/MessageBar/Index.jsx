import { BsEmojiWink } from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";
import styles from "./index.module.scss";

const MessageBar = () => {
    return (
        <div className={styles.MessageBar}>
            <input placeholder="Scrivi qui.."></input>
            <div className={styles.buttons}>
              <BsEmojiWink className={styles.emoji}/>
              <AiOutlinePaperClip className={styles.clip}/>
            </div>
        </div>
    )
};

export default MessageBar;