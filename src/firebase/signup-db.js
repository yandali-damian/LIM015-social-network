import { auth, db } from '../firebase/config-firebase.js';
import { validateSignup } from '../views/validates.js';
import { googleLogin } from './google-login.js';

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

        const inputName = document.querySelector('#nameSignup');
        const inputEmail = document.querySelector('#emailSignup');
        const inputPassword = document.querySelector('#passwordSignup');
        const msgAuth = document.querySelector('#smsEP');

        const name = inputName.value;
        const email = inputEmail.value;
        const password = inputPassword.value;

        validateSignup();

        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                // Signed in
                const user = auth.currentUser;
                user.sendEmailVerification()
                    .then(() => {

                        addUsers(name, email, password);
                        window.location.href = '#/home';
                        msgAuth.style.display = 'block';
                        msgAuth.innerHTML = 'Por favor revise su bandeja de entrada para verificar su cuenta';
                    })
                    .catch((error) => {
                        console.log(error);
                    })

            })
            .catch((error) => {
                console.log(error);
            });

    })

    const imgGoogle = document.querySelector('#imgGoogle');

    imgGoogle.addEventListener('click', (e) => {
        e.preventDefault();
        googleLogin();
    });
}

export { createAccount };