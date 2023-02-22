import styles from "./index.module.scss";
import Image from "next/image";

import { auth, db } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const UserSection = () => {
  const [user] = useAuthState(auth);
  return (
    <div className={styles.user}>
      <Image
        className={styles.userImg}
        src={user.photoURL}
        alt="user"
        width={40}
        height={40}
      />
      <div className={styles.userText}>
        <p>{user.displayName}</p>
        <button onClick={() => auth.signOut()}>Logout</button>
      </div>
    </div>
  );
};
