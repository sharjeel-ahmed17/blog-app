// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged  , signOut, signInWithPopup,GoogleAuthProvider  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEz0bp3KD6Bfp1Q-WSeExx3x1i2DRmZec",
  authDomain: "sharjeel-shop.firebaseapp.com",
  projectId: "sharjeel-shop",
  storageBucket: "sharjeel-shop.appspot.com",
  messagingSenderId: "698390275184",
  appId: "1:698390275184:web:8169340c7710cb051f80b5",
  measurementId: "G-KMZNHSHV0C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export{
    auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut ,GoogleAuthProvider ,signInWithPopup
}