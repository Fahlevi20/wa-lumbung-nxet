import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBcFJ6lIwMCHMu3eTvnDMYY8dcjjkLcst4",
  authDomain: "wa-next-levi-9c65d.firebaseapp.com",
  projectId: "wa-next-levi-9c65d",
  storageBucket: "wa-next-levi-9c65d.appspot.com",
  messagingSenderId: "437115107927",
  appId: "1:437115107927:web:3cd6243bbcac8a3b694112",
  measurementId: "G-G2DDM0RXD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {db, auth, provider}