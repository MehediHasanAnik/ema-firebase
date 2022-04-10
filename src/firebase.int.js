// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI24cWKkplUJB4yd4SpR7WoYPHxwWLgC4",
  authDomain: "ema-jhon-simple-1af5c.firebaseapp.com",
  projectId: "ema-jhon-simple-1af5c",
  storageBucket: "ema-jhon-simple-1af5c.appspot.com",
  messagingSenderId: "419669584494",
  appId: "1:419669584494:web:e37530d07e847fde46147f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
