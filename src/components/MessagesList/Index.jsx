import MessageBar from "../MessageBar/Index";
import Message from "../Message/Index";
import styles from "./index.module.scss";

import { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "@firebase/firestore";
import { db } from "../../firebase";

const MessagesList = ({ dbname }) => {
  const [messages, setMessages] = useState([]);
  //TODO: verificare che il dbname sia in una lista
  useEffect(() => {
    // if (dbname == undefined) return;
    const q = query(collection(db, dbname), orderBy("createdAt"), limit(50));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        // console.log("=> ", doc.data());
        messages.push({ ...doc.data(), id: doc.id });
      });
      // console.log(messages);
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  console.log(messages);
  return (
    <div className={styles.MessagesList}>
      <div className={styles.messages}>
        {messages.map((item, i) => (
          <Message data={item} key={i} />
        ))}
      </div>
      <MessageBar dbname={dbname} />
    </div>
  );
};

export default MessagesList;
