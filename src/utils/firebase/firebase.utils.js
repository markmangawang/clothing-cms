// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
import { async } from "@firebase/util";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN_IJ2jG43Hu1aI7-9UkOUcsvC32KkAzM",
  authDomain: "clothing-cms-db.firebaseapp.com",
  projectId: "clothing-cms-db",
  storageBucket: "clothing-cms-db.appspot.com",
  messagingSenderId: "998579110859",
  appId: "1:998579110859:web:11bd4e792f649a534d2c4e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider);

export const firestore_userDatabase = getFirestore();
export const firestore_userAuthDoc = async (userAuth) => {
  const firestore_userCreateDoc = await doc(
    firestore_userDatabase,
    "users",
    userAuth.uid
  );
  const firestore_userSnapshot = await getDoc(firestore_userCreateDoc);
  console.log(userAuth);
  if (!firestore_userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(firestore_userCreateDoc, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("You have got an error", error.message);
    }
  } else {
    return firestore_userCreateDoc;
  }
};
