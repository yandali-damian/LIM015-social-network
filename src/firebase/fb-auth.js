import { auth } from './config-firebase.js';

// Crear un usuario
export const createUserBD = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
};

// Obtener datos del usuario
export const currentUser = () => auth.currentUser;

// Login con correo
export const logInEmail = (email, password) => auth.signInWithEmailAndPassword(email, password);

// Login con google
export const logInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
};

// Cerrar Sesion
export const signOut = () => auth.signOut();
