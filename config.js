// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore }from "firebase/firestore";
import { getAuth } from 'firebase/auth'; // Importez le module d'authentification de Firebase

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxPWTuVpDvsb8PqvF3dCChfxCvNt5BSRI",
  authDomain: "museum-annabelle.firebaseapp.com",
  databaseURL: "https://museum-annabelle-default-rtdb.firebaseio.com",
  projectId: "museum-annabelle",
  storageBucket: "museum-annabelle.appspot.com",
  messagingSenderId: "347005518462",
  appId: "1:347005518462:web:3adba25e36920da257ce2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app); 

const auth = getAuth(app); // Initialisez Firebase Authentication

export default { db, auth }; 
//export default db;