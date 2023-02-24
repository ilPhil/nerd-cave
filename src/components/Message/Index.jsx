import styles from "./index.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase";
import Image from "next/image";
import { deleteDoc, doc } from "firebase/firestore";
import { BsTrash } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

const Message = ({ data, privateChat, dbname }) => {
  const [user] = useAuthState(auth);
  const deleteMessage = async () => {
    if (privateChat) {
      await deleteDoc(doc(db, `privateMessages/${dbname}/messages`, data.id));
    } else {
      await deleteDoc(doc(db, dbname, data.id));
    }
  };
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
                <div className={styles.dataNbtn}>
                  {user?.uid === data?.sender && (
                    <div className={styles.deleteWrapper}>
                      <label htmlFor="touch">
                        <span className={styles.sectionArrow}>
                          <AiOutlineDown className={styles.arrow} />
                        </span>
                      </label>
                      <input type="checkbox" className={styles.check}></input>

                      <div className={styles.controlDelete}>
                        {
                          <button
                            className={styles.btnDelete}
                            onClick={() => deleteMessage()}
                          >
                            <BsTrash />
                          </button>
                        }
                      </div>
                    </div>
                  )}
                  <p className={styles.time}>
                    {convertTimeStamp(data?.createdAt)}
                  </p>
                </div>
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
                {user?.uid === data?.uid && (
                  <div className={styles.deleteWrapper}>
                    <label htmlFor="touch">
                      <span className={styles.sectionArrow}>
                        <AiOutlineDown className={styles.arrow} />
                      </span>
                    </label>
                    <input type="checkbox" className={styles.check}></input>

                    <div className={styles.controlDelete}>
                      {
                        <button
                          className={styles.btnDelete}
                          onClick={() => deleteMessage()}
                        >
                          <BsTrash />
                        </button>
                      }
                    </div>
                  </div>
                )}
              </span>
              <div className={styles.paragraphAndTime}>
                <p className={styles.contentMessage}>{data.text}</p>
                <div className={styles.dataNbtn}>
                  <p className={styles.time}>
                    {convertTimeStamp(data?.createdAt)}
                  </p>
                </div>
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
