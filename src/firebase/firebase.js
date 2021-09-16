// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfSvXj-ui4XnyXphyXc2PmW9oz0folZrY",
    authDomain: "socialnetwork-warique.firebaseapp.com",
    projectId: "socialnetwork-warique",
    storageBucket: "socialnetwork-warique.appspot.com",
    messagingSenderId: "319501955056",
    appId: "1:319501955056:web:fea76ea693be166a863735",
    measurementId: "G-0JZL835T6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);