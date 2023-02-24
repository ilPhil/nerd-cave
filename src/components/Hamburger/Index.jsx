import style from "./style.module.scss";

import { global_chats } from "@/utils/constants";
import { UserSection } from "../UserSection";
import Link from "next/link";
import Modal from "../Modal/Index";
import { useState } from "react";
import { MdMessage } from "react-icons/md";

const Hamburger = ({ setNode }) => {
  const [isModalEnabled, setModalEnabled] = useState(false);
  const onHandleModal = () => setModalEnabled((prev) => !prev);
  return (
    <>
      <section className={style.menu}>
        {isModalEnabled ? (
          <Modal setNode={setNode} setModalEnabled={setModalEnabled} />
        ) : (
          <div className={style.hamburgerMenu}>
            <input className={style.menu__toggle} type="checkbox" />
            <label className={style.menu__btn} htmlFor="menu__toggle">
              <span></span>
            </label>

            <ul className={style.menu__box}>
              <li className={style.logout}>
                <UserSection />
              </li>
              {global_chats.map((topic, i) => (
                <li className={style.li__item} key={i}>
                  {topic.icon}
                  <Link className={style.menu__item} href={topic.route}>
                    {topic.name.replace("-", " e ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
};

export default Hamburger;
