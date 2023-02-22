import styles from "./index.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import Image from "next/image";

const Message = ({ data, privateChat }) => {
  const [user] = useAuthState(auth);
  return (
    <>
      {privateChat ? (
        <>
          <div
            className={`${
              user?.uid === data?.sender
                ? `${styles.Message} ${styles.user}`
                : `${styles.Message} ${styles.otherUser}`
            }`}
          >
            <div className={styles.text}>
              <div className={styles.paragraphAndTime}>
                <p className={styles.contentMessage}>{data?.text}</p>
                <p className={styles.time}>
                  {convertTimeStamp(data?.createdAt)}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={`${
              user?.uid === data?.uid
                ? `${styles.Message} ${styles.user}`
                : `${styles.Message} ${styles.prova}`
            }`}
          >
            <Image
              className={styles.userImg}
              src={data?.avatar ? data?.avatar + "" : ""}
              alt={data?.name}
              width={40}
              height={40}
            />
            <div className={styles.text}>
              <span>
                <h3>{user?.uid === data?.uid ? "Tu" : data?.name}</h3>
              </span>
              <div className={styles.paragraphAndTime}>
                <p className={styles.contentMessage}>{data.text}</p>
                <p className={styles.time}>
                  {convertTimeStamp(data?.createdAt)}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const convertTimeStamp = (timestamp) => {
  const date = new Date(timestamp?.seconds * 1000);
  if (date instanceof Date && !isNaN(date))
    return date.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });
  return "...";
};

export default Message;
