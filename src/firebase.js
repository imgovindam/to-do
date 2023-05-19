// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMShyVXw-yNuhEE5aL8OCYpiRCli4lcq4",
  authDomain: "todo-app-472e6.firebaseapp.com",
  projectId: "todo-app-472e6",
  storageBucket: "todo-app-472e6.appspot.com",
  messagingSenderId: "169377489633",
  appId: "1:169377489633:web:4fb14a4c3cc5d46bff8da0",
  measurementId: "G-BLQC9QQ9Q6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
