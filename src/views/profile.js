import { auth } from '../firebase/config-firebase.js';

const profile = () => {
    const viewProfile = document.querySelector('#sectionProfile');
    const userData = auth.currentUser;
    const defaultUser = {
        displayName: 'Nombre',
        photoURL: '../img/user.png'
    }

    //perfil de usuario
    viewProfile.innerHTML = `<article id="articleProfile" class="article-profile">
                                <figure>
                                    <img src='' id='photoProfile' class='photo-profile'/>
                                </figure>
                                <div id='divName' class='div-name'>
                                    <h3 id="nameProfile"></h3>
                                    <button id="btnEdit" class="btn-edit">
                                        <i class="fas fa-pencil-alt"></i>
                                    </button>
                                </div>
                            </article>
                            <article id="articlePost" class="article-post">
                                <div id="sectionBtnPost" class="section-btn-post">
                                    <button class="btn-post" id="btnPost">¿Dónde te fuiste a comer?</button>
                                </div>
                                <div id="iconPost" class="icon-post">
                                    <span><i class="fas fa-photo-video"></i> Foto/Vídeo</span>
                                </div>
                                <section class="section-post" id=sectionPost></section>
                            </article>`;

    // se recupera datos ingresados con gmail
    const divProfile = document.querySelector('#nameProfile');
    divProfile.innerText = userData.displayName;

    const photoProfile = document.querySelector('#photoProfile');
    photoProfile.src = userData.photoURL;

    return viewProfile;
}

export { profile };