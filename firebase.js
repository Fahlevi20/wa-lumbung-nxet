import firebase from 'firebase/app'; // Import the 'app' module explicitly
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcFJ6lIwMCHMu3eTvnDMYY8dcjjkLcst4",
    authDomain: "wa-next-levi-9c65d.firebaseapp.com",
    projectId: "wa-next-levi-9c65d",
    storageBucket: "wa-next-levi-9c65d.appspot.com",
    messagingSenderId: "437115107927",
    appId: "1:437115107927:web:3cd6243bbcac8a3b694112",
    measurementId: "G-G2DDM0RXD2"
  };

  const app = !getApps.length 
  ? initializeApp(firebaseConfig)
  : firebase.app(); 


  const db = getFirestore(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  export {db, auth, provider};