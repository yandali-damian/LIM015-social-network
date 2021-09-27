import { auth } from '../firebase/config-firebase.js';
import { googleLogin } from './google-login.js';

//funcion para login
const loginDB = () => {
    const formLogin = document.querySelector('#formLogin');

    const alertPassword = document.querySelector('#pPassword');
    const alertEmail = document.querySelector('#pEmail');

    const msg = document.querySelector('#smsEP');
    let formValid = true;

    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.querySelector('#inputEmail').value;
        const password = document.querySelector('#inputPassword').value;
        // console.log(e.target.email);
        if (email === '') {
            alertEmail.style.display = 'block';
            msg.style.display = 'none';
            formValid = false;
        } else {
            alertEmail.style.display = 'none';
        }

        if (password === '') {
            alertPassword.style.display = 'block';
            msg.style.display = 'none';
            formValid = false;
        } else {
            alertPassword.style.display = 'none';
        }

        if (formValid) {

            auth.signInWithEmailAndPassword(email, password)
                .then((response) => {
                    console.log(response);
                    if (response.user.emailVerified) {
                        window.location.href = '#/home';
                    } else {
                        msg.style.display = 'block';
                        msg.classList.add('sms-ep');
                        msg.innerText = `Cuenta no verificada, por favor revise su email`;
                    }
                })
                .catch((err) => {

                    const errCode = err.code;
                    const errMessage = err.message;

                    // console.log(errCode);

                    msg.style.display = 'block';
                    msg.classList.add('sms-ep');

                    switch (err.code) { //Verificando el Codigo de Error
                        case 'auth/wrong-password':
                            msg.innerText = `La contraseña no es correcta. Compruébala.`;
                            break;
                        case 'auth/user-not-found':
                            msg.innerText = 'El correo que ingresaste no pertenece a ninguna cuenta';
                            break;
                        default:
                            msg.innerText = 'Los datos ingresados son incorrectos, vuelve a ingresarlos';
                            break;
                    }
                });

        }


    })

    const imgGoogle = document.querySelector('#imgGoogle');

    imgGoogle.addEventListener('click', (e) => {
        e.preventDefault();
        googleLogin();
    });
}

export { loginDB };