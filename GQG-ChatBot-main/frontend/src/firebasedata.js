import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBDJ6yN0cFuaQkwAFLMwgFgCm4r9KwwnL4",
    authDomain: "gqg-chatbot.firebaseapp.com",
    projectId: "gqg-chatbot",
    storageBucket: "gqg-chatbot.appspot.com",
    messagingSenderId: "935693734495",
    appId: "1:935693734495:web:de385d2ee8961071b701ea",
    measurementId: "G-LHS0TS7DKV"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
