import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Paste your firebaseConfig from Firebase Console here
const firebaseConfig = {
    apiKey: "AIzaSyB6ToXoBPrTM6Aaa5uEIoDcxZvaQsPI0zg",
    authDomain: "summative-82318.firebaseapp.com",
    projectId: "summative-82318",
    storageBucket: "summative-82318.firebasestorage.app",
    messagingSenderId: "901275301519",
    appId: "1:901275301519:web:5f1d118e404209025ce2fa"
  };

const config = initializeApp(firebaseConfig)
const auth = getAuth(config);
const firestore = getFirestore(config);

export { auth, firestore };