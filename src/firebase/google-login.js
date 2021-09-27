import { auth } from '../firebase/config-firebase.js';

const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {

            console.log(result.user);
            // console.log('estamos en home');
            window.location.href = '#/home';
            localStorage.setItem('user', result.user.displayName);
            localStorage.setItem('photo', result.user.photoURL)

        }).catch((error) => {
            console.log(error, 'no es correcto')
        });
}

export { googleLogin };