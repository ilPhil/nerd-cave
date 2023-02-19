import Link from "next/link";
import styles from "./index.module.scss";

function SingleTopic({ data }) {
  return (
    <>
      <li className={styles.topicItem}>
        <span>{data.icon}</span>
        <Link href={data.route}>{data.name}</Link>
      </li>
    </>
  );
}

export default SingleTopic;
