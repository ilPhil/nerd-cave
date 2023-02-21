import styles from "./index.module.scss";
import { BsEmojiWink } from "react-icons/bs";

import React, { useState } from "react";

import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const MessageBar = ({ dbname, privateChat }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Il messaggio non è valido");
      return;
    }
    console.log(privateChat);
    const { uid, displayName, photoURL } = auth.currentUser;
    if (privateChat) {
      await addDoc(collection(db, `privateMessages/${dbname}/messages`), {
        text: message,
        createdAt: serverTimestamp(),
        sender: uid,
      });
    } else {
      await addDoc(collection(db, dbname), {
        text: message,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
    }
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
          placeholder="Invia un messaggio..."
          value={message}
        ></input>
        <div className={styles.buttons}>
          <BsEmojiWink className={styles.emoji} />
        </div>
      </form>
    </div>
  );
};

export default MessageBar;
