import { auth } from '../firebase/config-firebase.js';

const profile = () => {
    const viewProfile = document.querySelector('#sectionProfile');
    const userData = auth.currentUser;
    const defaultUser = {
        displayName: 'Nombre',
        photoURL: '../img/user.png'
    }

    console.log(defaultUser);

    //perfil de usuario
    viewProfile.innerHTML = `
        <section id='sectionPhoto' class='section-photo'>
            <img src='' id='photoProfile' class='photo-profile'/>
            <div id='divProfile' class='div-profile'></div>
        </section>
    `;

    // se recupera datos ingresados con gmail
    const divProfile = document.querySelector('#divProfile');
    divProfile.innerText = userData.displayName;

    const photoProfile = document.querySelector('#photoProfile');
    photoProfile.src = userData.photoURL;

    console.log(userData);

    return viewProfile;
}

export { profile };