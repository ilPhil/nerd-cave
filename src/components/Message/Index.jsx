import styles from "./index.module.scss";

const Message = ({ data }) => {
  return (
    <div className={styles.Message}>
      <img className={styles.userImg} src={data.avatar + ""} alt={data.name} />
      <div className={styles.text}>
        <span>
          <h3>{data.name}</h3>
          {/* <p>{data.createdAt}</p> */}
        </span>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default Message;
