import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBV39dDnLRiVBiIb5tlbnAThO0RpnzBNxU",
  authDomain: "react-portfolio-7d8d2.firebaseapp.com",
  projectId: "react-portfolio-7d8d2",
  storageBucket: "react-portfolio-7d8d2.appspot.com",
  messagingSenderId: "264041355797",
  appId: "1:264041355797:web:7c87d0a8430d3de9698c1c",
  measurementId: "G-5R8S5ZFPEG"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
