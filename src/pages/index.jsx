import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Hamburger from "@/components/Hamburger/Index";
import ChatSidebar from "@/components/chatSidebar/Index";
import TitleBar from "@/components/TitleBar";
import MessagesList from "@/components/MessagesList/Index";
import SingleMessage from "@/components/SingleMessage/Index";
import Link from "next/link";
import Login from "@/components/Login";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Start from "@/components/BtnStart";
import { useState } from "react";
import { BsTypeH1 } from "react-icons/bs";

export default function Home() {
  const [user] = useAuthState(auth);
  const [pressed, setPressed] = useState(false);

  return (
    <secion className={styles.home}>
      {!user ? (
        <Login />
      ) : !pressed ? (
        <Start setPressed={setPressed} />
      ) : (
        <h1>stanza</h1>
      )}
      <div className={styles.menu}>
        <button onClick={() => auth.signOut()}>sign out</button>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/chat">Chat</Link>
          </li>
        </ul>
      </div>
    </secion>
  );
}
