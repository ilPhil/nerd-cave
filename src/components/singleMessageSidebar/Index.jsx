import styles from "./index.module.scss";

function SingleMessageSidebar({ data }) {
  return (
    <div className={styles.SingleMessageSidebar}>
      <img src={data.avatar} alt="avatar" />
      <div className={styles.text}>
        <div className={styles.nameTime}>
          <h3>{data.name}</h3>
          <p>09:23</p>
        </div>
        <p>{data.text}</p>
      </div>
    </div>
  );
}

export default SingleMessageSidebar;
