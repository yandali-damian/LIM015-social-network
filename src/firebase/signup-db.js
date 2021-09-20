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

    const alertName = document.querySelector('#pName');
    const alertEmail = document.querySelector('#pEmail');
    const alertPassword = document.querySelector('#pPasword');
    const alertConfPasword = document.querySelector('#pConfPasword');

    const msg = document.querySelector('#smsEP');

    let formValid = true;

    formSignup.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.querySelector('#nameSignup').value;
        const email = document.querySelector('#emailSignup').value;
        const password = document.querySelector('#passwordSignup').value;
        const confirmPassword = document.querySelector('#confirmSignup').value;

        if (name === '') {
            alertName.style.display = 'block';
            // msg.style.display = 'none';
            formValid = false;
        } else {
            alertName.style.display = 'none';
        }

        if (email === '') {
            alertEmail.style.display = 'block';
            // msg.style.display = 'none';
            formValid = false;
        } else {
            alertEmail.style.display = 'none';
        }

        if (password === '') {
            alertPassword.style.display = 'block';
            // msg.style.display = 'none';
            formValid = false;
        } else {
            alertPassword.style.display = 'none';
        }

        if (confirmPassword === '') {
            alertConfPasword.style.display = 'block';
            // msg.style.display = 'none';
            formValid = false;
        } else {
            alertConfPasword.style.display = 'none';
        }

        if (formValid) {
            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in
                    console.log('Welcome home');
                    addUsers(name, email, password);
                    window.location.href = '#/home';
                })
                .catch((error) => {
                    // msg.style.display = 'block';
                    // msg.classList.add('sms-ep');
                    // msg.innerText = `Correo electrónico/contraseña incorrecta`;
                });
        }

    })
}

export { createAccount };