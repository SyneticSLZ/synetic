// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "synetic-fd4fc.firebaseapp.com",
  databaseURL: "https://synetic-fd4fc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "synetic-fd4fc",
  storageBucket: "synetic-fd4fc.appspot.com",
  messagingSenderId: "217585705334",
  appId: "1:217585705334:web:b9e0de8b9aa4ff63d39a57",
  measurementId: "G-YSGLSK5HDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage(app);