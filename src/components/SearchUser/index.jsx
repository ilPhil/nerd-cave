import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  where,
  getDocs,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const SearchUser = ({ setNode }) => {
  const [userToSearch, setUserToSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [usersFiltered, setUsersFiltered] = useState([]);
  const [primo, setPrimo] = useState(true);
  const [user] = useAuthState(auth);

  /**
   *
   * Lo UseEffect fetcha tutti gli users dal database e li carica su users state
   *
   */
  useEffect(() => {
    console.log("users lung", users.length);
    console.log("FAatto use effect");
    const fetchData = async () => {
      const documents = await getDocs(collection(db, "users"));
      // console.log(documents);
      documents.forEach((doc) => {
        if (
          doc
            .data()
            .displayName.toLowerCase()
            .includes(auth.currentUser.displayName.toLowerCase())
        )
          return;
        setUsers((users) => [...users, doc.data()]);
      });
      console.log("Finito operazioni");
    };
    fetchData();
    return () => console.log("Smontato");
  }, []);

  const onSearchSubmit = (event) => {
    event.preventDefault();
    //TODO: Rimuovere l'utente connesso alla sessione dalla lista, non puoi cercare te stesso
    console.log(users.length);
    setUsersFiltered(
      users.filter((user) =>
        user.displayName.toLowerCase().includes(userToSearch.toLowerCase())
      )
    );
  };

  const onClickUserCreateRelation = async (senderId, recivierId) => {
    const relationId =
      senderId < recivierId
        ? senderId + "-" + recivierId
        : recivierId + "-" + senderId;
    const q = query(
      collection(db, "privateMessages"),
      where("uid", "==", relationId)
    );
    const docRef = doc(db, "privateMessages", relationId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(doc(db, "privateMessages", relationId), {});
    } else {
      console.log("Relazione esisteva gia "); //TODO: REDIRECT IN CHAT PRIVATA
    }
    console.log("Sendere id ::::::::", senderId);
    console.log("Recivier id::::::::::", recivierId);

    setNode(recivierId);
  };

  return (
    <div className={styles.Modal}>
      <form onSubmit={onSearchSubmit}>
        <input onChange={(e) => setUserToSearch(e.target.value)}></input>
        <input type="submit" value="Cerca" />
      </form>
      <div>
        {usersFiltered.map((userFiltered) => (
          <p
            key={userFiltered.uid}
            onClick={() => {
              onClickUserCreateRelation(user.uid, userFiltered.uid);
              //todo redirect
            }}
          >
            {userFiltered.uid + " " + userFiltered.displayName}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SearchUser;
