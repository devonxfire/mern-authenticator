// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-authenticator-f43e9.firebaseapp.com",
  projectId: "mern-authenticator-f43e9",
  storageBucket: "mern-authenticator-f43e9.appspot.com",
  messagingSenderId: "725045985413",
  appId: "1:725045985413:web:fbc153d870666eb4f369ec",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
