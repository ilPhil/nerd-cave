import styles from "./index.module.scss";

import { useEffect, useRef, useState } from "react";

import MessageBar from "../MessageBar/Index";
import Message from "../Message/Index";

import { auth, db } from "../../firebase";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  updateDoc,
  doc,
} from "@firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const MessagesList = ({ dbname, privateChat }) => {
  const [messages, setMessages] = useState([]);
  const messagesEl = useRef(null);

  const [user] = useAuthState(auth);

  const scrollDown = () => {
    if (messagesEl != null)
      messagesEl.current.scrollBy({
        top: messagesEl.current.scrollHeight,
      });
  };

  useEffect(() => {
    let q = null;
    let unsubscribe = null;
    if (privateChat) {
      q = query(
        collection(db, `privateMessages/${dbname}/messages`),
        orderBy("createdAt"),
        limit(300)
      );
      unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        let messages = [];
        QuerySnapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        Promise.all(
          messages.map(async (message) => {
            if (message?.sender != user.uid)
              return await updateDoc(
                doc(db, `privateMessages/${dbname}/messages`, message.id),
                {
                  seen: true,
                }
              );
          })
        );
        setMessages(messages);
      });
    } else {
      q = query(collection(db, dbname), orderBy("createdAt"), limit(300));
      unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        let messages = [];
        QuerySnapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        setMessages(messages);
      });
    }
    return () => unsubscribe();
  }, [dbname]);

  useEffect(() => {
    scrollDown();
  }, [messages]);

  return (
    <div className={styles.MessagesList}>
      <div className={styles.messages} ref={messagesEl}>
        {messages.map((item, i) => (
          <Message
            data={item}
            privateChat={privateChat}
            dbname={dbname}
            key={i}
          />
        ))}
      </div>
      <MessageBar dbname={dbname} privateChat={privateChat} />
    </div>
  );
};

export default MessagesList;
