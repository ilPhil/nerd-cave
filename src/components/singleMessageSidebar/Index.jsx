import styles from "./index.module.scss";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";

function SingleMessageSidebar({ data, node, setNode }) {
  const [user] = useAuthState(auth);

  return (
    <Link href={"/chat/private/"} onClick={() => setNode(data)}>
      <div
        className={styles.SingleMessageSidebar}
        onClick={() => console.log(data.node)}
      >
        <img src={data?.otherUser?.photoURL} alt="avatar" />
        <div className={styles.text}>
          <div className={styles.nameTime}>
            <h3>{data?.otherUser?.displayName}</h3>
            <p>{convertTimeStamp(data?.lastMessage?.createdAt)}</p>
          </div>
          <p>
            {user.uid === data?.sender
              ? `Tu: ${data?.lastMessage?.text}`
              : data?.lastMessage?.text}
          </p>
        </div>
      </div>
    </Link>
  );
}

const convertTimeStamp = (timestamp) => {
  const date = new Date(timestamp?.seconds * 1000);
  return date.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default SingleMessageSidebar;
