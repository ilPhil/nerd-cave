import style from "./index.module.scss";

import Image from "next/image";
import logoNC from "../../../public/LogoNerdCave.png";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";

const Login = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (res) => {
        const { uid, displayName, photoURL } = auth.currentUser;
        const q = query(collection(db, "users"), where("uid", "==", uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
          console.log("Non esisteva, creato");
          await addDoc(collection(db, "users"), {
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
          });
        }
      })
      .catch((err) => console.log("errore"));
  };
  const signOut = () => {
    auth.signOut();
  };
  return (
    <div className={style.Login}>
      <div className={style.logo}>
        <Image src={logoNC} alt="LogoNerdCave" draggable="false" width={350} height={350} />
      </div>
      <div className={style.text}>
        <h2>LOGIN</h2>
      </div>
      <div className={style.container}>
        <button className={style.btn} onClick={googleSignIn}>
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
