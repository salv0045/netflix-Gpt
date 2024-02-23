// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-PnLbi0DWk_qGzbNbeOqJQN4WKQJwNsU",
  authDomain: "netflixgpt-3540c.firebaseapp.com",
  projectId: "netflixgpt-3540c",
  storageBucket: "netflixgpt-3540c.appspot.com",
  messagingSenderId: "770100349140",
  appId: "1:770100349140:web:9219cd13b6ac323364d341",
  measurementId: "G-01F3EZ4PW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();