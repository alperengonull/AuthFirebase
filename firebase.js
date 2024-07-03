// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPSJdXB_yErAzZcgnssHZPx79ARRAHVA0",
  authDomain: "loginauthentication-879d1.firebaseapp.com",
  projectId: "loginauthentication-879d1",
  storageBucket: "loginauthentication-879d1.appspot.com",
  messagingSenderId: "433371489622",
  appId: "1:433371489622:web:991bd0e882950de22662f7",
  measurementId: "G-2K8YCBGPE8"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

const auth = firebase.auth();
export { auth };

