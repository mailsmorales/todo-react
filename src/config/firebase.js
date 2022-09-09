import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaRdHCnubysDz_IuEd-htaZwNpq8ZFiR8",
  authDomain: "todo-b161f.firebaseapp.com",
  projectId: "todo-b161f",
  storageBucket: "todo-b161f.appspot.com",
  messagingSenderId: "907660582241",
  appId: "1:907660582241:web:a1c25fa066ee25fe267920",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)