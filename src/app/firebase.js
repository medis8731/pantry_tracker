// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtyfxEt-1XnluD8E6r4nXaiT8Iej2J0WM",
  authDomain: "pantry-tracker-b61fc.firebaseapp.com",
  projectId: "pantry-tracker-b61fc",
  storageBucket: "pantry-tracker-b61fc.appspot.com",
  messagingSenderId: "187628755872",
  appId: "1:187628755872:web:f2b28b79a08315bfe222c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);