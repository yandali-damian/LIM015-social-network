import { googleSignUp } from './google-signup.js';
import { addUsers, createUserBD } from '../firebase/signup-db.js';
import { auth } from '../firebase/config-firebase.js'

// Registar una cuenta y guardarlo en la db
export const createAccount = () => {

    const formSignup = document.querySelector('#formSignup');

    formSignup.addEventListener('submit', (e) => {
        e.preventDefault();

        const msgAuth = document.querySelector('#smsEP');
        msgAuth.style.display = 'block';
        msgAuth.classList.add('sms-ep');

        const name = document.querySelector('#nameSignup').value;
        const email = document.querySelector('#emailSignup').value;
        const password = document.querySelector('#passwordSignup').value;


        // Create user
        createUserBD(email, password)
            .then(() => {
                // Signed in
                const user = auth.currentUser;
                user.sendEmailVerification()
                    .then(() => {
                        addUsers(name, email);
                        alert('Por favor revise su bandeja de entrada para verificar su cuenta');
                        formSignup.reset();
                    })
                    .catch((error) => {
                        console.log(error);
                    })

            })
            .catch((error) => {
                const errCode = error.code;
                const errMessage = error.message;
                console.log(error);
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        msgAuth.innerText = 'El email ya está registrado.';
                        break;
                    case 'auth/weak-password':
                        msgAuth.innerText = 'Ingresar una contraseña mayor a 6 dígitos';
                        break;
                    case 'auth/internal-error':
                        msgAuth.innerText = 'Ingresar una contraseña';
                        break;
                    default:
                        msgAuth.innerText = 'Completar los campos';
                        break;
                }
            });

    })

    googleSignUp();
}