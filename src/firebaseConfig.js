// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfwQ_3zt3W2A7DE4Z-GakfW_msmq3AfLA",
  authDomain: "zoka-games.firebaseapp.com",
  projectId: "zoka-games",
  storageBucket: "zoka-games.appspot.com",
  messagingSenderId: "1021115254731",
  appId: "1:1021115254731:web:0786d4f6c66adf0c26584e",
  measurementId: "G-2ZWHZTJY2B",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

