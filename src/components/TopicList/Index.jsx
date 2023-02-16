import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import SingleTopic from "../SingleTopic/Index";
import styles from "./index.module.scss";
import { global_chats } from "@/utils/constants";

function TopicList() {
  return (
    <div className={styles.topics}>
      <h3>
        <span>
          <BsFillPlayCircleFill />
        </span>
        Canali:
      </h3>
      <ul>
        {global_chats.map((topic) => (
          <SingleTopic data={topic} key={topic.id} />
        ))}
      </ul>
    </div>
  );
}

export default TopicList;
