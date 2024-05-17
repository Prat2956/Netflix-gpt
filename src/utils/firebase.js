// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqk3EDteBXMHwSgWtcXJF0UiDyGLwYa48",
  authDomain: "netflix-gpt-f099a.firebaseapp.com",
  projectId: "netflix-gpt-f099a",
  storageBucket: "netflix-gpt-f099a.appspot.com",
  messagingSenderId: "147847903315",
  appId: "1:147847903315:web:18294d4bf165f837d8aea6",
  measurementId: "G-E30Z2XSY7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
 export const auth = getAuth();