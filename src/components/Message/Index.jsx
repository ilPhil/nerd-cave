import styles from "./index.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase";
import Image from "next/image";
import { deleteDoc, doc } from "firebase/firestore";
import { BsFillGearFill, BsFillTrashFill } from "react-icons/bs";
import { IoCheckmarkOutline, IoCheckmarkDone } from "react-icons/io5";

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
                          <BsFillGearFill className={styles.arrow} />
                        </span>
                      </label>
                      <input type="checkbox" className={styles.check}></input>
                      <div className={styles.controlDelete}>
                        {
                          <button
                            className={styles.btnDelete}
                            onClick={() => deleteMessage()}
                          >
                            <BsFillTrashFill />
                          </button>
                        }
                      </div>
                    </div>
                  )}
                  <div className={styles.timeNSeen}>
                    <p className={styles.time}>
                      {convertTimeStamp(data?.createdAt)}
                    </p>
                    {user?.uid === data?.sender &&
                      (data?.seen ? (
                        <IoCheckmarkDone className={styles.checkmarkDone} />
                      ) : (
                        <IoCheckmarkOutline className={styles.checkmarkNot} />
                      ))}
                    {/* {data?.seen && user?.uid === data?.sender ? (
                      <IoCheckmarkDone className={styles.checkmarkDone} />
                    ) : (
                      <IoCheckmarkOutline className={styles.checkmarkNot} />
                    )} */}
                  </div>
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
                {user?.uid != data?.uid && <h3>{data?.name}</h3>}
                {/* <h3>{user?.uid === data?.uid ? "" : data?.name}</h3> */}
                {user?.uid === data?.uid && (
                  <div className={styles.deleteWrapper}>
                    <label htmlFor="touch">
                      <span className={styles.sectionArrow}>
                        <BsFillGearFill className={styles.arrow} />
                      </span>
                    </label>
                    <input type="checkbox" className={styles.check}></input>

                    <div className={styles.controlDelete}>
                      {
                        <button
                          className={styles.btnDelete}
                          onClick={() => deleteMessage()}
                        >
                          <BsFillTrashFill />
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
