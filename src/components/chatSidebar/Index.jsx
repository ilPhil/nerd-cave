import styles from "./index.module.scss";
import { AiFillHome } from "react-icons/ai";
import { BsFillPlayCircleFill } from "react-icons/bs";
import SingleMessageSidebar from "../singleMessageSidebar/Index";
import TopicList from "../TopicList/Index";

const mockChat = [
  {
    avatar: "1.jpg",
    createdAt: "1-2-3",
    name: "Nuccio",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus augue sapien, commodo vitae dignissim id",
    uid: "1",
  },
  {
    avatar: "2.jpg",
    createdAt: "1-2-3",
    name: "Tiziano",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus augue sapien",
    uid: "2",
  },
  {
    avatar: "3.jpg",
    createdAt: "1-2-4",
    name: "Elisa",
    text: "Mauris aliquet gravida tempor. Pellentesque pretium nisi lacus, at dignissim tortor bibendum sed. In hac habitasse platea dictumst. Nulla lacus neque, sollicitudin tristique justo vitae, ullamcorper euismod neque. Morbi scelerisque tortor at facilisis rutrum. Sed at feugiat arcu, vel eleifend turpis. Proin egestas placerat nulla blandit aliquam.",
    uid: "3",
  },
  {
    avatar: "4.jpg",
    createdAt: "1-2-4",
    name: "Jennifer",
    text: "Mauris aliquet gravida tempor. Pellentesque pretium nisi lacus, at dignissim tortor bibendum sed. In hac habitasse platea dictumst.",
    uid: "4",
  },
];

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
        {mockChat.map((item) => (
          <SingleMessageSidebar data={item} key={item.uid} />
        ))}
      </div>
      <hr></hr>
      <div className={styles.topics}>
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
