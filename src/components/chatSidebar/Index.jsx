import styles from "./index.module.scss";
import { AiFillHome } from "react-icons/ai";
import { BsFillPlayCircleFill, BsFilm } from "react-icons/bs";
import { SiYoutubegaming, SiYoutubemusic } from "react-icons/si";
import { FaPen, FaBook } from "react-icons/fa";
import SingleMessageSidebar from "../singleMessageSidebar/Index";
import { global_chats } from "@/utils/constants";
import TopicList from "../TopicList/Index";

function ChatSidebar() {
  return (
    <div className={styles.ChatSidebar}>
      <div className={styles.home}>
        <AiFillHome />
      </div>
      <h3>
        <span>
          <BsFillPlayCircleFill />
        </span>
        Ultimi Messaggi:
      </h3>
      <div className={styles.lastMsgs}>
        <SingleMessageSidebar />
        <SingleMessageSidebar />
        <SingleMessageSidebar />
        <SingleMessageSidebar />
      </div>
      <hr></hr>
      <div className={styles.topics}>
        {/* <h3>
          <span>
            <BsFillPlayCircleFill />
          </span>
          Canali:
        </h3>
        <ul>
          <li>
            <span>
              <BsFilm />
            </span>
            {global_chats[0].name}
          </li>
          <li>
            <span>
              <SiYoutubegaming />
            </span>
            {global_chats[1].name}
          </li>
          <li>
            <span>
              <SiYoutubemusic />
            </span>
            {global_chats[2].name}
          </li>
          <li>
            <span>
              <FaPen />
            </span>
            {global_chats[3].name}
          </li>
          <li>
            <span>
              <FaBook />
            </span>
            {global_chats[4].name}
          </li>
        </ul>
      </div> */}
        <TopicList />
      </div>
      <div className={styles.user}>
        <img
          className={styles.userImg}
          src="https://picsum.photos/60/60"
          alt="user"
        />
        <p>Nome Utente</p>
      </div>
    </div>
  );
}

export default ChatSidebar;
