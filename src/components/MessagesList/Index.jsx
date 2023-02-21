import styles from "./index.module.scss";

import { useEffect, useRef, useState } from "react";

import MessageBar from "../MessageBar/Index";
import Message from "../Message/Index";

import { db } from "../../firebase";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "@firebase/firestore";

const MessagesList = ({ dbname, privateChat }) => {
  const [messages, setMessages] = useState([]);
  const messagesEl = useRef(null);
  //TODO: verificare che il dbname sia in una lista

  const scrollDown = () => {
    console.log("scrolla");
    if (messagesEl != null)
      messagesEl.current.scrollBy({
        top: messagesEl.current.scrollHeight,
      });
  };

  useEffect(() => {
    let q = null;
    if (privateChat) {
      q = query(
        collection(db, `privateMessages/${dbname}/messages`),
        orderBy("createdAt"),
        limit(300)
      );
    } else {
      q = query(collection(db, dbname), orderBy("createdAt"), limit(300));
    }
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, [dbname]);

  useEffect(() => {
    scrollDown();
  }, [messages]);

  console.log("messages: ", messages);
  return (
    <div className={styles.MessagesList}>
      <div className={styles.messages} ref={messagesEl}>
        {messages.map((item, i) => (
          <Message data={item} key={i} privateChat={privateChat} />
        ))}
      </div>
      <MessageBar dbname={dbname} privateChat={privateChat} />
    </div>
  );
};

export default MessagesList;
