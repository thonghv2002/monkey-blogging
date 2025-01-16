// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoOVml-9dbzgkRRH0-vh0r2kCOKZHwDhQ",
  authDomain: "monkey-blogging-d0237.firebaseapp.com",
  projectId: "monkey-blogging-d0237",
  storageBucket: "monkey-blogging-d0237.firebasestorage.app",
  messagingSenderId: "53844609147",
  appId: "1:53844609147:web:6f033f824465a3555efade",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
