import { auth, db } from '../firebase/config-firebase.js';

// Agregar un usuario a db
export const addUsers = (uid, name, photo) => {
    return db.collection('users').doc(uid).set({
        uid,
        name,
        photo
    });
}

export const createUserBD = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
};

export const currentUser = () => auth.currentUser;

//Cerrar Sesion
export const signout = () => {
    return auth.signOut(); // Cerrar  sesion al usuario auntentificado
}