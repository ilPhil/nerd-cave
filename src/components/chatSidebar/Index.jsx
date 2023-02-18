import styles from "./index.module.scss";
import logo from "../../../public/LogoNerdCave.png";
import SingleMessageSidebar from "../singleMessageSidebar/Index";
import TopicList from "../TopicList/Index";
import Image from "next/image";

const mockChat = [
  {
    avatar: "https://picsum.photos/60/60?1",
    createdAt: "1-2-3",
    name: "Nuccio",
    text: "Lorem ipsum ",
    uid: "1",
  },
  {
    avatar: "https://picsum.photos/60/60?2",
    createdAt: "1-2-3",
    name: "Tiziano",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus augue sapien",
    uid: "2",
  },
  {
    avatar: "https://picsum.photos/60/60?3",
    createdAt: "1-2-4",
    name: "Elisa",
    text: "Mauris aliquet gravida tempor. Pellentesque pretium nisi lacus, at dignissim tortor bibendum sed. In hac habitasse platea dictumst. Nulla lacus neque, sollicitudin tristique justo vitae, ullamcorper euismod neque. Morbi scelerisque tortor at facilisis rutrum. Sed at feugiat arcu, vel eleifend turpis. Proin egestas placerat nulla blandit aliquam.",
    uid: "3",
  },
  {
    avatar: "https://picsum.photos/60/60?4",
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
        <Image src={logo} alt="logo" width={150} height={150} />
      </div>
      <h3 className={styles.title}>Ultimi Messaggi:</h3>
      <div className={styles.lastMsgs}>
        {mockChat.map((item) => (
          <SingleMessageSidebar data={item} key={item.uid} />
        ))}
      </div>
      <div className={styles.topics}>
        <TopicList />
      </div>
      <div className={styles.user}>
        <img
          className={styles.userImg}
          src="https://picsum.photos/60/60"
          alt="user"
        />
        <div className={styles.userText}>
          <p>Nome Utente</p>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default ChatSidebar;
