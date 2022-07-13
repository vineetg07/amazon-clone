import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBRKbnwlhtjjpGKeRxq2Z93llpi2rfhNNs",
    authDomain: "clone-742ee.firebaseapp.com",
    projectId: "clone-742ee",
    storageBucket: "clone-742ee.appspot.com",
    messagingSenderId: "38692802776",
    appId: "1:38692802776:web:cf50d17ac6fa60554fc7ad",
    measurementId: "G-TX7LNRMZ16"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };