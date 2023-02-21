import style from "./style.module.scss";

import { BsFillChatDotsFill, BsFilm } from "react-icons/bs";
import { SiYoutubegaming, SiYoutubemusic } from "react-icons/si";
import { FaPen, FaBook } from "react-icons/fa";
import { global_chats } from "@/utils/constants";
import { UserSection } from "../UserSection";

const Hamburger = () => {
  return (
    <section className={style.menu}>
      <div className={style.hamburgerMenu}>
        <input className={style.menu__toggle} type="checkbox" />
        <label className={style.menu__btn} htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className={style.menu__box}>
          {global_chats.map((topic) => (
            <li className={style.li__item}>
              {topic.icon}
              <a className={style.menu__item} href={topic.route}>
                {topic.name.replace("-", " e ")}
              </a>
            </li>
          ))}
          {/*  <li className={style.li__item}>
            <BsFillChatDotsFill />
            <a className={style.menu__item} href="https://www.google.com">
              Chat
            </a>
          </li>
          <li className={style.li__item}>
            <BsFilm />
            <a className={style.menu__item} href="https://www.google.com">
              Film/Telefilm
            </a>
          </li>
          <li className={style.li__item}>
            <SiYoutubemusic />
            <a className={style.menu__item} href="https://www.google.com">
              Musica
            </a>
          </li>

          <li className={style.li__item}>
            <SiYoutubegaming />
            <a className={style.menu__item} href="https://www.google.com">
              Gaming
            </a>
          </li>
          <li className={style.li__item}>
            <FaPen />
            <a className={style.menu__item} href="https://www.google.com">
              Anime/Manga
            </a>
          </li>
          <li className={style.li__item}>
            <FaBook />
            <a className={style.menu__item} href="https://www.google.com">
              Letteratura
            </a>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default Hamburger;
