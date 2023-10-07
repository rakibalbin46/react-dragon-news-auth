// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpRxtB8b56F8hCPPZ5ljVUeZp6QxJDqA8",
  authDomain: "react-dragon-news-auth-8750e.firebaseapp.com",
  projectId: "react-dragon-news-auth-8750e",
  storageBucket: "react-dragon-news-auth-8750e.appspot.com",
  messagingSenderId: "602070083479",
  appId: "1:602070083479:web:1eb90b25dbb9921529c6d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;