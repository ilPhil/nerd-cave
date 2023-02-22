import styles from "@/styles/Home.module.scss";

import { useState } from "react";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Link from "next/link";

import imgLogoNerdCave from "@/../public/LogoNerdCave.png";
import Image from "next/image";

import Login from "@/components/Login";
import Start from "@/components/BtnStart";
import Head from "next/head";
import Hamburger from "@/components/Hamburger/Index";
import Scene from "@/components/spline";
import Loader from "@/components/Loader";

export default function Home() {
  const [user] = useAuthState(auth);
  const [pressed, setPressed] = useState(false);
  const [loadScene, setLoadScene] = useState(true);
  return (
    <secion className={styles.home}>
      {!user ? (
        <Login />
      ) : !pressed ? (
        <Start setPressed={setPressed} />
      ) : (
        <>
          <Head>
            <title>Nerd Cave</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            <Hamburger />
            <div className={styles.Wrapper}>
              <Image
                src={imgLogoNerdCave}
                width={200}
                height={200}
                className={styles.logo}
              />
              <div className={styles.text}>
                <p className={styles.helloUser}>
                  Hello, <span> {user.displayName}</span>
                </p>
                <h2>Welcome to the</h2>
                <h1>Nerd Cave</h1>
                <div className={styles.paragraph}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <b>Nam vel commodo velit, at rutrum urna</b>. Duis nec
                    ullamcorper tortor.Nulla ut nisi eget mi porttitor placerat
                    non vitae nunc. Cras porttitor mauris enim, a pretium justo
                    tempor ut. Nullam erat massa, <b>dignissim a</b>, facilisis
                    at justo. Etiam luctus nulla at est lobortis, quis egestas
                    purus porttitor.
                  </p>
                </div>
                <div className={styles.containerBtn}>
                  <button className={styles.btn}>
                    <Link href="/chat/messages">Chat Globale</Link>
                  </button>
                </div>
              </div>
              <div className={styles.room}>
                <Scene setLoadScene={setLoadScene} />
                {loadScene && <Loader />}
              </div>
            </div>
          </main>
        </>
      )}
    </secion>
  );
}
