import styles from "./index.module.scss";

function SingleTopic({ data }) {
  return (
    <>
      <li className={styles.topicItem}>
        <span>{data.icon}</span>
        {data.name}
      </li>
    </>
  );
}

export default SingleTopic;
