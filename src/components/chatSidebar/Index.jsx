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
  limitToLast,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";

// const mockChat = [
//   {
//     avatar: "https://picsum.photos/60/60?1",
//     createdAt: "1-2-3",
//     name: "Nuccio",
//     text: "Lorem ipsum ",
//     uid: "1",
//   },
//   {
//     avatar: "https://picsum.photos/60/60?2",
//     createdAt: "1-2-3",
//     name: "Tiziano",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus augue sapien",
//     uid: "2",
//   },
//   {
//     avatar: "https://picsum.photos/60/60?3",
//     createdAt: "1-2-4",
//     name: "Elisa",
//     text: "Mauris aliquet gravida tempor. Pellentesque pretium nisi lacus, at dignissim tortor bibendum sed. In hac habitasse platea dictumst. Nulla lacus neque, sollicitudin tristique justo vitae, ullamcorper euismod neque. Morbi scelerisque tortor at facilisis rutrum. Sed at feugiat arcu, vel eleifend turpis. Proin egestas placerat nulla blandit aliquam.",
//     uid: "3",
//   },
//   {
//     avatar: "https://picsum.photos/60/60?4",
//     createdAt: "1-2-4",
//     name: "Jennifer",
//     text: "Mauris aliquet gravida tempor. Pellentesque pretium nisi lacus, at dignissim tortor bibendum sed. In hac habitasse platea dictumst.",
//     uid: "4",
//   },
// ];

function ChatSidebar() {
  const [lastPrivateMessages, setLastPrivateMessages] = useState([]);
  const [primo, setPrimo] = useState(true);
  const [somethingHappens, setSomethingHappens] = useState(null);

  useEffect(() => {
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
            setLastPrivateMessages([]);
            setSomethingHappens(QuerySnapshot);
          });
        }
      });
      setPrimo(false);
    };
    setAllSnapshots();
  }, []);

  useEffect(() => {
    if (primo) return;
    const fetchData = async () => {
      const privateChatNodesDocuments = await getDocs(
        collection(db, "privateMessages")
      );
      privateChatNodesDocuments.forEach(async (doc) => {
        const idSpllited = doc.id.split("-");
        if (idSpllited.includes(auth.currentUser.uid)) {
          const otherUserId = idSpllited.filter(
            (element) => element != auth.currentUser.uid
          );
          const otherUser = await getUserById(otherUserId[0]);
          const lastMessage = await getLastMessage(doc.id);
          setLastPrivateMessages((prev) => {
            return [
              ...prev,
              { otherUser: otherUser, lastMessage: lastMessage },
            ];
          });
        }
      });
    };
    fetchData();
  }, [somethingHappens]);

  return (
    <div className={styles.ChatSidebar}>
      <div className={styles.home}>
        <Image src={logo} alt="logo" width={150} height={150} />
      </div>
      <h3 className={styles.title}>Ultimi Messaggi:</h3>
      <div className={styles.lastMsgs}>
        {lastPrivateMessages.map((item, i) => (
          <SingleMessageSidebar data={item} key={i} />
        ))}
      </div>
      <div className={styles.topics}>
        <TopicList />
      </div>
      <div className={styles.user}>
        <img
          className={styles.userImg}
          src="https://picsum.photos/60/60"
          alt="user"
        />
        <div className={styles.userText}>
          <p>Nome Utente</p>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}

const getLastMessage = async (privateMessageNode) => {
  console.log("Entrato in getLastMessage");
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
// getLastMessage("tiziano-nuccio").then((res) => console.log(res));

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
