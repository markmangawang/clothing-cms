// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithRedirect, signInWithPopup, getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN_IJ2jG43Hu1aI7-9UkOUcsvC32KkAzM",
  authDomain: "clothing-cms-db.firebaseapp.com",
  projectId: "clothing-cms-db",
  storageBucket: "clothing-cms-db.appspot.com",
  messagingSenderId: "998579110859",
  appId: "1:998579110859:web:11bd4e792f649a534d2c4e"
};



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);