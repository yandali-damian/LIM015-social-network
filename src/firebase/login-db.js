import { auth } from '../firebase/config-firebase.js';

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
                .then((userCredential) => {
                    window.location.href = '#/home';
                })
                .catch((error) => {
                    msg.style.display = 'block';
                    msg.classList.add('sms-ep');
                    msg.innerText = `Correo electrónico/contraseña incorrecta`;
                });

        }
    })
}

export { loginDB };