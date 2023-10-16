// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "goodwills-estate.firebaseapp.com",
  projectId: "goodwills-estate",
  storageBucket: "goodwills-estate.appspot.com",
  messagingSenderId: "390320222180",
  appId: "1:390320222180:web:d295cbbb37f572e7d161f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);