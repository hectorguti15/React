// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUKunh_0LT1cqA4MIAVR2y_FS9bdZkKhU",
  authDomain: "react-2b609.firebaseapp.com",
  projectId: "react-2b609",
  storageBucket: "react-2b609.appspot.com",
  messagingSenderId: "65990519318",
  appId: "1:65990519318:web:e806bc72ede99fc9f7e337",
  measurementId: "G-VTBLKJKBD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);