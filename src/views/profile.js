import { auth } from '../firebase/config-firebase.js';

const profile = () => {
    const viewProfile = document.querySelector('#sectionProfile');
    const userData = auth.currentUser;
    const defaultUser = {
        displayName: 'Nombre',
        photoURL: '../img/user.png'
    }

    // console.log(defaultUser);

    //perfil de usuario
    viewProfile.innerHTML = `
                            <article id="articleProfile" class="article-profile">
                                
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

                                <section id="sectionModalPost" class="section-modal-post">
                                    <input placeholder="¿Dónde te fuiste a comer?" class="input-post" id="inputPost">
                                </section>

                                <div id="iconPost" class="icon-post">
                                    <span><i class="fas fa-images"></i></span>
                                    <span><i class="fas fa-video"></i></span>
                                </div>

                                <section class="section-modal-post" id=sectionModalPost>
                                
                                </section>

                                <section class="section-post" id=sectionPost>
                                
                                </section>

                            </article>
                            `;

    // se recupera datos ingresados con gmail
    const divProfile = document.querySelector('#nameProfile');
    divProfile.innerText = userData.displayName;

    const photoProfile = document.querySelector('#photoProfile');
    photoProfile.src = userData.photoURL;

    console.log(userData);

    return viewProfile;
}

export { profile };