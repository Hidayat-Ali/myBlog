// Import the functions you need from the SDKs you need
import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjE8BY4rZ0NgKlmL7cV6YtW5ioyZYsIEY",
  authDomain: "myblog-a4537.firebaseapp.com",
  projectId: "myblog-a4537",
  storageBucket: "myblog-a4537.appspot.com",
  messagingSenderId: "866207045761",
  appId: "1:866207045761:web:d0db0fb06397d70bfd9580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
 export const auth = getAuth(app);
 export const provider = new GoogleAuthProvider();