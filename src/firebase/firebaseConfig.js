// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWx5g1sfvfUSVapJLz2dRvduGI8IwX_tQ",
    authDomain: "ai-gen-c6396.firebaseapp.com",
    projectId: "ai-gen-c6396",
    storageBucket: "ai-gen-c6396.appspot.com",
    messagingSenderId: "564317980766",
    appId: "1:564317980766:web:303f0a1c7cd50874a48ccf",
    measurementId: "G-LQSM2J5NB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);