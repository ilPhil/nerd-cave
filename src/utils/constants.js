import { BsFilm } from "react-icons/bs";
import { SiYoutubegaming, SiYoutubemusic } from "react-icons/si";
import { FaPen, FaBook } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import filmTelefilm from "@/../../public/film-telefilm.png";
import gaming from "@/../../public/gaming.png";
import letteratura from "@/../../public/letteratura.png";
import mangaAnime from "@/../../public/manga-anime.png";
import globale from "@/../../public/messages.png";
import musica from "@/../../public/musica.png";

export const global_chats = [
  {
    name: "globale",
    route: "/chat/globale",
    icon: <TfiWorld />,
    image: globale,
    id: 1,
  },
  {
    name: "film-telefilm",
    route: "/chat/film-telefilm",
    icon: <BsFilm />,
    image: filmTelefilm,
    id: 2,
  },
  {
    name: "gaming",
    route: "/chat/gaming",
    icon: <SiYoutubegaming />,
    image: gaming,
    id: 3,
  },
  {
    name: "musica",
    route: "/chat/musica",
    icon: <SiYoutubemusic />,
    image: musica,
    id: 4,
  },
  {
    name: "manga-anime",
    route: "/chat/manga-anime",
    icon: <FaPen />,
    image: mangaAnime,
    id: 5,
  },
  {
    name: "letteratura",
    route: "/chat/letteratura",
    icon: <FaBook />,
    image: letteratura,
    id: 6,
  },
];
