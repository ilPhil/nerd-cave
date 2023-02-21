import styles from "./index.module.scss";
import Image from "next/image";

import Hamburger from "../Hamburger/Index";
import SearchUser from "../SearchUser";
import { global_chats } from "@/utils/constants";

const TitleBar = ({ title }) => {
  return (
    <div className={styles.TitleBar}>
      <span>
        <Hamburger />
      </span>
      <div>
        <div className={styles.contain}>
          <div className={styles.description}>
            <div className={styles.text}>
              <div className={styles.title}>
                {global_chats
                  .filter((item) => item.name == title)
                  .map((img) => (
                    <Image
                      src={img.image}
                      alt="title_logo"
                      width={40}
                      height={40}
                    />
                  ))}

                <h2>{title}</h2>
              </div>
              <SearchUser />
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
