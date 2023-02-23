import styles from "./index.module.scss";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import Hamburger from "../Hamburger/Index";
import { global_chats } from "@/utils/constants";
import { useState } from "react";
import Modal from "../Modal/Index";

const TitleBar = ({ title, photo, setNode }) => {
  const [isModalEnabled, setModalEnabled] = useState(false);
  const onHandleModal = () => setModalEnabled((prev) => !prev);

  return (
    <>
      {isModalEnabled && (
        <Modal setNode={setNode} setModalEnabled={setModalEnabled} />
      )}
      <div className={styles.TitleBar}>
        <span>
          <Hamburger setNode={setNode} />
        </span>
        <div>
          <div className={styles.contain}>
            <div className={styles.description}>
              <div className={styles.text}>
                <div className={styles.title}>
                  {global_chats
                    .filter((item) => item.name == title)
                    .map((img, i) => (
                      <Image
                        src={img.image}
                        alt="title_logo"
                        width={40}
                        height={40}
                        key={i}
                      />
                    ))}
                  {photo && (
                    <Image
                      src={photo}
                      alt="user_logo"
                      width={40}
                      height={40}
                      className={styles.avatar}
                    />
                  )}
                  <h2>{title}</h2>
                </div>
                <div className={styles.searchIcon} onClick={onHandleModal}>
                  <FiSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleBar;
