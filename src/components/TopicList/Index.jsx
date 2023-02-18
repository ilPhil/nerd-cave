import styles from "./index.module.scss";
import React from "react";
import SingleTopic from "../SingleTopic/Index";
import { global_chats } from "@/utils/constants";

function TopicList() {
  return (
    <div className={styles.topics}>
      <h3>Canali:</h3>
      <ul>
        {global_chats.map((topic) => (
          <SingleTopic data={topic} key={topic.id} />
        ))}
      </ul>
    </div>
  );
}

export default TopicList;
