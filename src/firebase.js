// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRWboJhoaiTVNwUC5f5uGkjzgEhXYscvE",
  authDomain: "buenogram-3f7a7.firebaseapp.com",
  databaseURL:
    "https://buenogram-3f7a7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "buenogram-3f7a7",
  storageBucket: "buenogram-3f7a7.appspot.com",
  messagingSenderId: "411172138306",
  appId: "1:411172138306:web:c30c54a23ff00e21666cdb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
