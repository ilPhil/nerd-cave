import Login from "@/components/Login";

import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Chat() {
  const [user] = useAuthState(auth);
  return <>{!user ? <Login /> : (window.location.href = "/chat/globale")}</>;
}
