import { lognInWithGoogle } from '../firebase/login-db.js';
import { currentUser } from '../firebase/signup-db.js';

export const googleSignUp = () => {
    const imgGoogle = document.querySelector('#imgGoogle');

    imgGoogle.addEventListener('click', (e) => {
        e.preventDefault();
        lognInWithGoogle()
            .then((result) => {

                // console.log(currentUser());
                // console.log(result.user);
                window.location.href = '#/home';
                localStorage.setItem('user', result.user.displayName);
                localStorage.setItem('photo', result.user.photoURL)

            }).catch((error) => {
                console.log(error, 'no es correcto')
            });
    });
}