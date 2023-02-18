import styles from "./index.module.scss";
import { BsEmojiWink } from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";

import React, { useState } from "react";

import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const MessageBar = ({ dbname }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Il messaggio non è valido");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, dbname), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
  };
  return (
    <div>
      <form
        className={styles.MessageBar}
        onSubmit={(event) => sendMessage(event)}
      >
        <input
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Scrivi qui..."
          value={message}
        ></input>
        <div className={styles.buttons}>
          <BsEmojiWink className={styles.emoji} />
          <AiOutlinePaperClip className={styles.clip} />
        </div>
      </form>
    </div>
  );
};

export default MessageBar;
