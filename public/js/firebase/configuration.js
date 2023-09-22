// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgH99z3T_RjiVsWcGMG20T4sCMYvwur18",
  authDomain: "bret-41113.firebaseapp.com",
  projectId: "bret-41113",
  storageBucket: "bret-41113.appspot.com",
  messagingSenderId: "194885553965",
  appId: "1:194885553965:web:60abab2117ad40617bcda4",
  measurementId: "G-SK8LGKM3H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)

export const db = getFirestore(app);
