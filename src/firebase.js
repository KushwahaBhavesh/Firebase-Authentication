// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqP3_a4yw1QcZwHF07Hvli_FQLMZF8hic",
  authDomain: "fir-authenticationsystem-4013a.firebaseapp.com",
  projectId: "fir-authenticationsystem-4013a",
  storageBucket: "fir-authenticationsystem-4013a.appspot.com",
  messagingSenderId: "353848566744",
  appId: "1:353848566744:web:31669afdee3e4a32a288ad",
  measurementId: "G-DMC05STDX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const database = firebase.database;
export default app;
