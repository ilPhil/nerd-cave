import styles from "./index.module.scss";

function SingleMessageSidebar({ data }) {
  console.log(data.otherUser);
  console.log("Immagine: ", data.otherUser.photoURL);
  return (
    <div className={styles.SingleMessageSidebar}>
      <img src={data.otherUser.photoURL} alt="avatar" />
      <div className={styles.text}>
        <div className={styles.nameTime}>
          <h3>{data.otherUser.displayName}</h3>
          <p>{convertTimeStamp(data.lastMessage.createdAt)}</p>
        </div>
        <p>{data.lastMessage.text}</p>
      </div>
    </div>
  );
}

const convertTimeStamp = (timestamp) => {
  const date = new Date(timestamp.seconds * 1000);
  return date.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default SingleMessageSidebar;
