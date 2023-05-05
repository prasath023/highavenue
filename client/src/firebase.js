// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyB0lJHcHpeh9v4HzTYbb4a5jZSjdvU17cc",

    authDomain: "highavenue-prod.firebaseapp.com",

    databaseURL: "https://highavenue-prod.firebaseio.com",

    projectId: "highavenue-prod",

    storageBucket: "highavenue-prod.appspot.com",

    messagingSenderId: "844485713822",

    appId: "1:844485713822:web:2fe5c10c0ec7ccbf1c808f",

    measurementId: "G-SLNWLRSWSJ"

};



// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore(app);

//npm install -g firebase-tools