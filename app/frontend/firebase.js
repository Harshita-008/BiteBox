// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "bitebox-755f0.firebaseapp.com",
  projectId: "bitebox-755f0",
  storageBucket: "bitebox-755f0.firebasestorage.app",
  messagingSenderId: "13198419141",
  appId: "1:13198419141:web:9cefca6ca5b42c1bb8fcac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}