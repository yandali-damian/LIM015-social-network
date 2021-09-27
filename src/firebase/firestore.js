import { db } from './config-firebase.js';

const getDataUser = (userId) => {
    return db.collection('users').doc(userId).get();
}

export {
    getDataUser
}