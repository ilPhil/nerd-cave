import styles from "./index.module.scss";

import { auth, db } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const UserSection = () => {
  const [user] = useAuthState(auth);
  return (
    <div className={styles.user}>
      <img className={styles.userImg} src={user.photoURL} alt="user" />
      <div className={styles.userText}>
        <p>{user.displayName}</p>
        <button onClick={() => auth.signOut()}>Logout</button>
      </div>
    </div>
  );
};
