// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMfT-AspwfiKxvgTCFPsbgjCTeuozQwtw",
  authDomain: "netflixgpt-26858.firebaseapp.com",
  projectId: "netflixgpt-26858",
  storageBucket: "netflixgpt-26858.appspot.com",
  messagingSenderId: "1092924421320",
  appId: "1:1092924421320:web:72b7363e6b438f9ffc61fd",
  measurementId: "G-9KMS9TR87W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();