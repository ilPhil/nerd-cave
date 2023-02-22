import styles from "./index.module.scss";
import logo from "../../../public/LogoNerdCave.png";
import SingleMessageSidebar from "../singleMessageSidebar/Index";
import TopicList from "../TopicList/Index";
import Image from "next/image";

import { auth, db } from "@/firebase";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { UserSection } from "../UserSection";
import Link from "next/link";

function ChatSidebar({ node, setNode }) {
  const [lastPrivateMessages, setLastPrivateMessages] = useState([]);
  const [primo, setPrimo] = useState(true);
  const [somethingHappens, setSomethingHappens] = useState(null);

  useEffect(() => {
    const q2 = query(collection(db, `privateMessages`));
    const unsubscribe2 = onSnapshot(q2, async (QuerySnapshot) => {
      setAllSnapshots();
      setSomethingHappens(QuerySnapshot);
    });

    const setAllSnapshots = async () => {
      const privateChatNodesDocuments = await getDocs(
        collection(db, "privateMessages")
      );
      privateChatNodesDocuments.forEach((doc) => {
        const idSpllited = doc.id.split("-");
        if (idSpllited.includes(auth.currentUser.uid)) {
          const otherUserId = idSpllited.filter(
            (element) => element != auth.currentUser.uid
          );
          const q = query(collection(db, `privateMessages/${doc.id}/messages`));
          const unsubscribe = onSnapshot(q, async (QuerySnapshot) => {
            setSomethingHappens(QuerySnapshot);
          });
        }
      });
      setPrimo(false);
    };
  }, []);

  useEffect(() => {
    if (primo) return;
    const fetchData = async () => {
      const privateChatNodesDocuments = await getDocs(
        collection(db, "privateMessages")
      );
      let temp = [];
      let allMex = [];
      privateChatNodesDocuments.forEach((doc) => {
        temp = [...temp, doc];
      });

      await Promise.all(
        temp.map(async (doc) => {
          const idSpllited = doc.id.split("-");
          if (idSpllited.includes(auth.currentUser.uid)) {
            const otherUserId = idSpllited.filter(
              (element) => element != auth.currentUser.uid
            );
            const otherUser = await getUserById(otherUserId[0]);
            const lastMessage = await getLastMessage(doc.id);
            if (lastMessage === null) return;
            allMex = [
              ...allMex,
              {
                otherUser: otherUser,
                lastMessage: lastMessage,
                node: doc.id,
              },
            ];
          }
          return allMex;
        })
      );
      setLastPrivateMessages(allMex);
    };
    fetchData();
  }, [somethingHappens]);

  return (
    <div className={styles.ChatSidebar}>
      <div className={styles.home}>
        <Link href="/">
          <Image src={logo} alt="logo" width={150} height={150} />
        </Link>
      </div>
      <h3 className={styles.title}>Ultimi Messaggi:</h3>
      <div className={styles.lastMsgs}>
        {lastPrivateMessages.map((item, i) => (
          <SingleMessageSidebar
            data={item}
            node={node}
            setNode={setNode}
            key={i}
          />
        ))}
      </div>
      <div className={styles.topicnUser}>
        <div className={styles.topics}>
          <TopicList />
        </div>
        <div className={styles.userS}>
          <UserSection />
        </div>
      </div>
    </div>
  );
}

const getLastMessage = async (privateMessageNode) => {
  if (!privateMessageNode) return;
  let result = null;
  const q = query(
    collection(db, `privateMessages/${privateMessageNode}/messages`),
    orderBy("createdAt", "desc"),
    limit(1)
  );
  const docsSnap = await getDocs(q);
  if (docsSnap.docs.length == 1) {
    result = docsSnap.docs[0].data();
  }
  return result;
};

export const getUserById = async (id) => {
  return await getDocs(collection(db, "users")).then((documents) => {
    let result = null;
    documents.forEach(async (doc) => {
      const userSnap = doc.data();
      if (userSnap.uid === id) {
        result = doc.data();
      }
    });
    return result;
  });
};

export default ChatSidebar;
