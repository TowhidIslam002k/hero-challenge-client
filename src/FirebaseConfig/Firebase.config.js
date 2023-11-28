// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApLwbk0a92I1MDDyYkePk5t-sSA1dXhfs",
  authDomain: "hero-challenge3.firebaseapp.com",
  projectId: "hero-challenge3",
  storageBucket: "hero-challenge3.appspot.com",
  messagingSenderId: "575402710756",
  appId: "1:575402710756:web:8987ab9880917ec4b5fef1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app