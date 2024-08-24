// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTJi54MR0hBJREr_f5txiZ-VMWLn5MnU0",
    authDomain: "tobiauth-8e24a.firebaseapp.com",
    projectId: "tobiauth-8e24a",
    storageBucket: "tobiauth-8e24a.appspot.com",
    messagingSenderId: "858976536651",
    appId: "1:858976536651:web:9ee0b3179cc0e8c78465ce",
    
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};