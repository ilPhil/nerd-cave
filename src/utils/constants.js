import { BsFilm } from "react-icons/bs";
import { SiYoutubegaming, SiYoutubemusic } from "react-icons/si";
import { FaPen, FaBook } from "react-icons/fa";

export const global_chats = [
  {
    name: "Film/Telefilm",
    route: "/film-telefilm",
    icon: <BsFilm />,
  },
  {
    name: "Gaming",
    route: "/gaming",
    icon: <SiYoutubegaming />,
  },
  {
    name: "Musica",
    route: "/musica",
    icon: <SiYoutubemusic />,
  },
  {
    name: "Manga/Anime",
    route: "/manga-anime",
    icon: <FaPen />,
  },
  {
    name: "Letteratura",
    route: "/letteratura",
    icon: <FaBook />,
  },
];
