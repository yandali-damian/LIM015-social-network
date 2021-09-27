import { auth, db } from '../firebase/config-firebase.js';

// Agregar un usuario a db
export const addUsers = (name, email) => {
    db.collection('users').doc().set({
        name,
        email
    });
}

export const createUserBD = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
};

export const getInfo = () => auth.currentUser;