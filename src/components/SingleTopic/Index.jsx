import Link from "next/link";
import styles from "./index.module.scss";

function SingleTopic({ data }) {
  return (
    <>
      <li className={styles.topicItem}>
        <Link href={data.route}>
          {data.icon} {data.name.replace("-", " e ")}
        </Link>
      </li>
    </>
  );
}

export default SingleTopic;
