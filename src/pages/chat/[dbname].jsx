import styles from "./index.module.scss";

import { useRouter } from "next/router";
import Head from "next/head";

import ChatSidebar from "@/components/chatSidebar/Index";
import TitleBar from "@/components/TitleBar";
import MessagesList from "@/components/MessagesList/Index";
import Login from "@/components/Login";

import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { global_chats } from "@/utils/constants";
import SearchUser from "@/components/SearchUser";

export default function () {
  const router = useRouter();
  const db_name = router.query.dbname;
  const [user] = useAuthState(auth);

  const [node, setNode] = useState({});

  return (
    <>
      {!user ? (
        <Login />
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
            <div className={styles.leftSide}>
              <ChatSidebar node={node} setNode={setNode} />
            </div>
            <div className={styles.rightSide}>
              {db_name === "private" ? (
                node.otherUser ? (
                  <>
                    <TitleBar
                      setNode={setNode}
                      title={node.otherUser.displayName}
                      photo={node.otherUser.photoURL}
                    />
                    <MessagesList dbname={node.node} privateChat={true} />
                  </>
                ) : (
                  <div className={styles.boxChat}>
                    <div className={styles.newChat}>
                      <h2>Inizia una nuova chat</h2>
                      <div className={styles.searchBar}>
                        <SearchUser setNode={setNode}/>
                      </div>
                    </div>
                  </div>
                )
              ) : (
                <>
                  {}
                  <TitleBar title={db_name} setNode={setNode} />
                  {db_name != "private" &&
                  !global_chats
                    .map((item) => item)
                    .map((route) => route.name)
                    .includes(db_name) ? (
                    <h1>Chat non esistente</h1>
                  ) : (
                    db_name && (
                      <MessagesList dbname={db_name} privateChat={false} />
                    )
                  )}
                </>
              )}
            </div>
          </main>
        </>
      )}
    </>
  );
}
