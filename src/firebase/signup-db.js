import { auth, db } from '../firebase/config-firebase.js';

// Agregar un usuario a db
const addUsers = (name, email, password) => {
    db.collection('users').doc().set({
        name,
        email,
        password,
    });
}

// Registar una cuenta y guardarlo en la db
const createAccount = () => {

    const formSignup = document.querySelector('#formSignup');

    formSignup.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.querySelector('#nameSignup').value;
        const email = document.querySelector('#emailSignup').value;
        const password = document.querySelector('#passwordSignup').value;
        const confirmPassword = document.querySelector('#confirmSignup').value;

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                console.log('Welcome home');
                addUsers(name, email, password);
                window.location.href='#/home';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    })
}

export { createAccount };