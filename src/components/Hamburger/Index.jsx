// import "./style.css";

import { BsFillChatDotsFill, BsFilm } from "react-icons/bs";
import { SiYoutubegaming, SiYoutubemusic } from "react-icons/si";
import { FaPen, FaBook } from "react-icons/fa";

const Hamburger = () => {
  return (
    <section class="menu">
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul class="menu__box">
          <li>
            <SiYoutubemusic />
            <a class="menu__item" href="https://www.google.com">
              Musica
            </a>
          </li>
          <li>
            <BsFilm />
            <a class="menu__item" href="https://www.google.com">
              Film/SerieTv
            </a>
          </li>
          <li>
            <SiYoutubegaming />
            <a class="menu__item" href="https://www.google.com">
              Gaming
            </a>
          </li>
          <li>
            <FaPen />
            <a class="menu__item" href="https://www.google.com">
              Anime/Manga
            </a>
          </li>
          <li>
            <FaBook />
            <a class="menu__item" href="https://www.google.com">
              Letteratura
            </a>
          </li>
          <li>
            <BsFillChatDotsFill />
            <a class="menu__item" href="https://www.google.com">
              Chat
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hamburger;
