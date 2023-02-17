import { useRouter } from "next/router";
import Head from "next/head";

import styles from "@/styles/Home.module.scss";
import Hamburger from "@/components/Hamburger/Index";
import ChatSidebar from "@/components/chatSidebar/Index";
import TitleBar from "@/components/TitleBar";
import MessagesList from "@/components/MessagesList/Index";
import SingleMessage from "@/components/SingleMessage/Index";

export default function () {
  const router = useRouter();
  const db_name = router.query.dbname;
  console.log("in db name:", db_name);
  console.log("log query:", router.query);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.leftSide}>
          <ChatSidebar />
        </div>
        <div className={styles.rightSide}>
          <TitleBar title={db_name} />
          {db_name && <MessagesList dbname={db_name} />}
        </div>
        {/* <SingleMessage /> */}
      </main>
      {/* <Hamburger /> */}
    </>
  );
}
