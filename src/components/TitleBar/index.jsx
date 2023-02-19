import styles from "./index.module.scss";
import Image from "next/image";
// import imagesChat from "@/../public/images";
import imgMessages from "@/../public/messages.png";
import Hamburger from "../Hamburger/Index";

const TitleBar = ({ title }) => {
  return (
    <div className={styles.TitleBar}>
      <div>
        <div className={styles.contain}>
          <div className={styles.description}>
            <div className={styles.text}>
              <div className={styles.title}>
                <Image
                  src={imgMessages}
                  alt="title_logo"
                  width={40}
                  height={40}
                />
                <h2>{title}</h2>
              </div>
              <input placeholder="cerca..."></input>
              <span>
                <Hamburger />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
