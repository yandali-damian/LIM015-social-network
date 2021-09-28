import { auth } from '../firebase/config-firebase.js';


export const lognin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
}

export const lognInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider)
}