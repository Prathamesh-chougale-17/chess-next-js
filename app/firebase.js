// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnEOLgTpUwc5NR0fwBqqiAey8mZdBwMxM",
    authDomain: "test-9c89b.firebaseapp.com",
    projectId: "test-9c89b",
    storageBucket: "test-9c89b.appspot.com",
    messagingSenderId: "130964102447",
    appId: "1:130964102447:web:aba3f0289a6b17ddec95da",
    measurementId: "G-5NZFNNT6ST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);