import styles from "./index.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";

const Message = ({ data }) => {
  const [user] = useAuthState(auth);
  return (
    <div
      className={`${
        user.uid === data.uid
          ? `${styles.Message} ${styles.user}`
          : `${styles.Message} ${styles.prova}`
      }`}
    >
      <img className={styles.userImg} src={data.avatar + ""} alt={data.name} />
      <div className={styles.text}>
        <span>
          <h3>{user.uid === data.uid ? "Tu" : data.name}</h3>
        </span>
        <div className={styles.paragraphAndTime}>
          <p className={styles.contentMessage}>{data.text}</p>
          <p className={styles.time}>{convertTimeStamp(data?.createdAt)}</p>
        </div>
      </div>
    </div>
  );
};

const convertTimeStamp = (timestamp) => {
  const date = new Date(timestamp?.seconds * 1000);
  return date.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default Message;
