import MessageBar from "../MessageBar/Index";
import Message from "../Message/Index";
import styles from "./index.module.scss";

const mockMsg = [
  {
    avatar: "https://picsum.photos/60/60",
    createdAt: "1-2-3",
    name: "Nuccio",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus augue sapien, commodo vitae dignissim id",
    uid: "1",
  },
  {
    avatar: "https://picsum.photos/60/60",
    createdAt: "1-2-3",
    name: "Tiziano",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus augue sapien",
    uid: "2",
  },
  {
    avatar: "https://picsum.photos/60/60",
    createdAt: "1-2-4",
    name: "Elisa",
    text: "Mauris aliquet gravida tempor. Pellentesque pretium nisi lacus, at dignissim tortor bibendum sed. In hac habitasse platea dictumst. Nulla lacus neque, sollicitudin tristique justo vitae, ullamcorper euismod neque. Morbi scelerisque tortor at facilisis rutrum. Sed at feugiat arcu, vel eleifend turpis. Proin egestas placerat nulla blandit aliquam.",
    uid: "3",
  },
  {
    avatar: "https://picsum.photos/60/60",
    createdAt: "1-2-4",
    name: "Jennifer",
    text: "Mauris aliquet gravida tempor. Pellentesque pretium nisi lacus, at dignissim tortor bibendum sed. In hac habitasse platea dictumst.",
    uid: "3",
  },
];

const MessagesList = () => {
  return (
    <div className={styles.MessagesList}>
      <div className={styles.messages}>
        {mockMsg.map((item) => (
          <Message data={item} key={item.id} />
        ))}
      </div>
      <MessageBar />
    </div>
  );
};

export default MessagesList;
