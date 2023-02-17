import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Hamburger from "@/components/Hamburger/Index";
import ChatSidebar from "@/components/chatSidebar/Index";
import TitleBar from "@/components/TitleBar";
import MessagesList from "@/components/MessagesList/Index";
import SingleMessage from "@/components/SingleMessage/Index";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/chat">Chat</Link>
        </li>
      </ul>
    </>
  );
}
