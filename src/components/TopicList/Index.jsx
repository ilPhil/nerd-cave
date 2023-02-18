import styles from "./index.module.scss";

import { BsFillPlayCircleFill } from "react-icons/bs";

import React from "react";

import SingleTopic from "../SingleTopic/Index";

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
