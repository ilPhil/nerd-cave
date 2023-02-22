import styles from "./index.module.scss";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import Image from "next/image";

function SingleMessageSidebar({ data, setNode }) {
  const [user] = useAuthState(auth);
  console.log("data:" + data);
  return (
    <Link
      href={"/chat/private/"}
      onClick={() => setNode(data)}
      className={styles.link}
    >
      <div className={styles.SingleMessageSidebar}>
        <Image
          src={data?.otherUser?.photoURL}
          alt="avatar"
          width={40}
          height={40}
        />
        <div className={styles.text}>
          <div className={styles.nameTime}>
            <h3>{data?.otherUser?.displayName}</h3>
            <p>{convertTimeStamp(data?.lastMessage?.createdAt)}</p>
          </div>
          <p>
            {user.uid === data?.lastMessage?.sender ? (
              <>
                <span className={styles.user}>Tu: </span>{" "}
                <span>{data?.lastMessage?.text}</span>
              </>
            ) : (
              data?.lastMessage?.text
            )}
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
