// import styles from "./index.module.scss";
import Login from "@/components/Login";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Chat() {
  const [user] = useAuthState(auth);
  return <>{!user ? <Login /> : <h1>DIOPORCO</h1>}</>;
}
