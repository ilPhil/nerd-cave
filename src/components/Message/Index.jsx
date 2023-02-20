import styles from "./index.module.scss";

const Message = ({ data }) => {
  return (
    <div className={styles.Message}>
      <img className={styles.userImg} src={data.avatar + ""} alt={data.name} />
      <div className={styles.text}>
        <span>
          <h3>{data.name}</h3>
        </span>
        <div className={styles.paragraphAndTime}>
          <p>{data.text}</p>
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
