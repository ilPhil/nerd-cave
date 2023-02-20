import { BsFilm } from "react-icons/bs";
import { SiYoutubegaming, SiYoutubemusic } from "react-icons/si";
import { FaPen, FaBook } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

export const global_chats = [
  {
    name: "Globale",
    route: "/chat/messages",
    icon: <TfiWorld />,
  },
  {
    name: "Film/Telefilm",
    route: "/chat/film-telefilm",
    icon: <BsFilm />,
  },
  {
    name: "Gaming",
    route: "/chat/gaming",
    icon: <SiYoutubegaming />,
  },
  {
    name: "Musica",
    route: "/chat/musica",
    icon: <SiYoutubemusic />,
  },
  {
    name: "Manga/Anime",
    route: "/chat/manga-anime",
    icon: <FaPen />,
  },
  {
    name: "Letteratura",
    route: "/chat/letteratura",
    icon: <FaBook />,
  },
];
