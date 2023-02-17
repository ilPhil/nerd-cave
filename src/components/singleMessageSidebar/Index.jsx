import styles from "./index.module.scss";

function SingleMessageSidebar({ data }) {
  return (
    <div className={styles.SingleMessageSidebar}>
      <h3>{data.name}</h3>
      <p>{data.text}</p>
    </div>
  );
}

export default SingleMessageSidebar;
