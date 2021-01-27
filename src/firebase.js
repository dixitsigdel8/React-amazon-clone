import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAndz5mV55nQh8uzzUCqyPOksGuah_biII",
  authDomain: "challenge-fe934.firebaseapp.com",
  projectId: "challenge-fe934",
  storageBucket: "challenge-fe934.appspot.com",
  messagingSenderId: "150418323890",
  appId: "1:150418323890:web:50d7c550689cd353864cab",
  measurementId: "G-SS0TCNN6SL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
