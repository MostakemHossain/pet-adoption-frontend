
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwmVdzI9AjmopBV95wpypmNq6KplqAgVE",
  authDomain: "pet-adoption-85fa6.firebaseapp.com",
  projectId: "pet-adoption-85fa6",
  storageBucket: "pet-adoption-85fa6.appspot.com",
  messagingSenderId: "697300846270",
  appId: "1:697300846270:web:6c5574c6d01a0c9dc980ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();