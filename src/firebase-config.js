// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYebUFiwIAgEA5p9AP_KrWhQkgJuYbcZQ",
  authDomain: "ereader-4990c.firebaseapp.com",
  projectId: "ereader-4990c",
  storageBucket: "ereader-4990c.appspot.com",
  messagingSenderId: "758835651686",
  appId: "1:758835651686:web:2b869507801e6f7888b9a7",
  measurementId: "G-XV4RWPSFDE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
