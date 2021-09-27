import { lognInWithGoogle } from '../firebase/login-db.js';
import { getInfo } from '../firebase/signup-db.js';

export const googleSignUp = () => {
    const imgGoogle = document.querySelector('#imgGoogle');

    imgGoogle.addEventListener('click', (e) => {
        e.preventDefault();
        lognInWithGoogle()
            .then((result) => {

                console.log(getInfo());
                console.log(result.user);
                // console.log('estamos en home');
                window.location.href = '#/home';
                localStorage.setItem('user', result.user.displayName);
                localStorage.setItem('photo', result.user.photoURL)

            }).catch((error) => {
                console.log(error, 'no es correcto')
            });
    });
}