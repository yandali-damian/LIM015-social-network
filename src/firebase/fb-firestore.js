import { db } from './config-firebase.js';

// Agregar un usuario a la coleccion USERS
export const addUsers = (uid, name, photo) => {
    return db.collection('users').doc(uid).set({
        uid,
        name,
        photo
    });
}

// Funcion para fecha actual
export const datePost = () => {
    const date = new Date().toLocaleDateString('es-ES');
    return date;
}

// Agregar informacion de un post a la coleccion POST
export const createPost = (post, email, name, photoUser, uid, photoPost) => {
    return db.collection('post').add({
        post,
        email,
        name,
        photoUser,
        uid,
        datePost: datePost(),
        timePost: firebase.firestore.FieldValue.serverTimestamp(),
        photoPost
    });
}

// Obtener información de todos los post
export const getAllPost = () => db.collection('post').orderBy("timePost", "desc");

// Obtener información de un post de la colleción POST
export const getPost = (id) => db.collection('post').doc(id).get();

// Editar un post de la colleción POST
export const editDataPost = (id, update) => db.collection('post').doc(id).update(update);

// Eliminar un post de la colleción POST
export const deleteDataPost = (id) => db.collection('post').doc(id).delete();