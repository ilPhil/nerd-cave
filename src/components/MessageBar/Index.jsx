import styles from "./index.module.scss";
import { BsEmojiWink } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

import React, { useState } from "react";

import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
/* import Picker from "emoji-picker-react"; */
import dynamic from "next/dynamic";

const Picker = dynamic(
  () => {
    return import("emoji-picker-react");
  },
  { ssr: false }
);

const MessageBar = ({ dbname, privateChat }) => {
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiObject) => {
    setMessage((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Il messaggio non è valido");
      return;
    }

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
    <div className={styles.main}>
      {showPicker && (
        <div className={styles.merda}>
          <Picker
            onEmojiClick={onEmojiClick}
            theme="light"
            emojiStyle="google"
          />
        </div>
      )}
      <form
        className={styles.MessageBar}
        onSubmit={(event) => sendMessage(event)}
      >
        <BsEmojiWink
          className={styles.emoji}
          onClick={() => setShowPicker((val) => !val)}
        />
        <input
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Invia un messaggio..."
          value={message}
        ></input>
        <div className={styles.buttons}>
          {message != "" && (
            <FiSend className={styles.emoji} onClick={(e) => sendMessage(e)} />
          )}
        </div>
      </form>
    </div>
  );
};

export default MessageBar;
