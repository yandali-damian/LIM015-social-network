import { googleSignUp } from './google-signup.js';
import { addUsers, createUserBD, currentUser } from '../firebase/signup-db.js';
import { auth } from '../firebase/config-firebase.js'

// Registar una cuenta y guardarlo en la db
export const createAccount = () => {

    const formSignup = document.querySelector('#formSignup');

    formSignup.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.querySelector('#nameSignup').value;
        const email = document.querySelector('#emailSignup').value;
        const password = document.querySelector('#passwordSignup').value;
        const password2 = document.querySelector('#confirmSignup').value;

        const modal = document.querySelector('#modal');
        const alertVerify = document.querySelector('#alertVerify')
        const msgAuth = document.querySelector('#smsEP');
        msgAuth.classList.add('sms-ep');

        if (name == '' || email == '' || password == '' || password2 == '') {
            msgAuth.style.display = 'block';
            msgAuth.innerText = 'Completar todos los campos';
            return;
        } else if (password !== password2) {
            msgAuth.style.display = 'block';
            msgAuth.innerText = 'Las contraseñas no coinciden.';
            return;
        }

        // Create user
        createUserBD(email, password)
            .then((response) => {
                // Signed in
                currentUser().updateProfile({
                    displayName: name,
                    photoURL: 'https://firebasestorage.googleapis.com/v0/b/socialnetwork-warique.appspot.com/o/avatar.png?alt=media&token=efb8edcd-91b3-4044-a846-d2b408fc934b'
                }).then(() => {
                }).catch((error) => {
                    console.log(error);
                })
                addUsers(response.user.uid, name);
            })
            .then(() => {
                modal.style.display = 'block';
                alertVerify.innerText = 'Por favor revise su bandeja de entrada para verificar su cuenta';
                currentUser().sendEmailVerification();
            })
            .catch((error) => {

                msgAuth.style.display = 'block';

                const errCode = error.code;
                const errMessage = error.message;
                console.log(error);
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        msgAuth.innerText = 'El email ya está registrado.';
                        break;
                    default:
                        msgAuth.innerText = 'Ingresar una contraseña mayor a 6 dígitos';
                        break;
                }
            });

    })

    googleSignUp();
}