const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAfSvXj-ui4XnyXphyXc2PmW9oz0folZrY",
    authDomain: "socialnetwork-warique.firebaseapp.com",
    projectId: "socialnetwork-warique",
    storageBucket: "socialnetwork-warique.appspot.com",
    messagingSenderId: "319501955056",
    appId: "1:319501955056:web:fea76ea693be166a863735",
    measurementId: "G-0JZL835T6M"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };