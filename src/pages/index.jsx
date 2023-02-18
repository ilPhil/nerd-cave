import styles from "@/styles/Home.module.scss";

import { useState } from "react";

import Link from "next/link";

import Login from "@/components/Login";
import Start from "@/components/BtnStart";

import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

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
      {/* <div className={styles.menu}>
        <button onClick={() => auth.signOut()}>sign out</button>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/chat">Chat</Link>
          </li>
        </ul>
      </div> */}
    </secion>
  );
}
