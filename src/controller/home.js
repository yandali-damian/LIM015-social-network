// importar de firebase
import { createPost, getAllPost, getPost, editDataPost, deleteDataPost } from '../firebase/fb-firestore.js';
import { currentUser } from '../firebase/fb-auth.js';
import { uploadFileStorage, getFileStorage } from '../firebase/fb-storage.js';

import { modalPost } from '../views/modal.js';

export const homeDB = () => {

    modalPost();

    const btnCreatePost = document.querySelector('#btnCreatePost');
    const sectionModalPost = document.querySelector('#sectionModalPost');

    const btnPublishPost = document.querySelector('#btnPublishPost');
    const contentPost = document.querySelector('#textAreaPost');

    let editStatus = false;
    let id = '';

    // Mostrar todos los post en la vista home
    const showAllPost = () => {
        getAllPost().onSnapshot(querySnapshot => {
            const articlePost = document.querySelector('#articlePost');
            articlePost.innerHTML = '';
            querySnapshot.forEach(doc => {
                const infoPost = doc.data();
                articlePost.innerHTML += `<section id="sectionContent" class="section-content">
                                            <div class="name-photo">
                                                <figure>
                                                    <img src="${infoPost.photoUser}" class='photoUser'/>
                                                </figure>
                                                <div class="div-date">
                                                    <h4> ${infoPost.name} </h4>
                                                    <h6> ${infoPost.datePost} <h6>
                                                </div>
                                            </div>
                                            <div class="div-content-post">
                                                <p> ${infoPost.post} </p>
                                            </div>
                                            <figure class="div-photo-post" id="contentPhoto">
                                                <img src="${infoPost.photoPost}" id="imgPhotoPost" />
                                            </figure>
                                            <div class="div-buttons" id="divButtons">
                                                <button id="btnEdit" class="btn-edit" data-id="${doc.id}"><i class="fas fa-edit"></i>Edit</button>
                                                <button id="btnDelete" class="btn-delete" data-id="${doc.id}"><i class="fas fa-trash-alt"></i>Delete</button>
                                            </div>
                                        </section>`;

                // Ocultar foto vacia de un post
                const imgPhoto = document.querySelectorAll('#imgPhotoPost');
                imgPhoto.forEach(element => {
                    if ( element.src === "" ) {
                        element.style.display = 'none';
                    } else {
                        element.style.display = 'block';
                        element.classList.add('img-photo-post');
                    }
                });

                // Editar un post
                // const btnEdit = document.querySelectorAll('#btnEdit');
                // btnEdit.forEach(btn => {
                //     btn.addEventListener('click', async (e) => {
                //         const doc = await getPost(e.target.dataset.id);
                //         sectionModalPost.classList.add('show-modal');
                //         btnPublishPost.innerText = 'Actualizar post';
                //         const imgPost = document.querySelector('#photoPost');
                //         imgPost.value = '';
                //         contentPost.value = '';
                //         contentPost.value = doc.data().post;
                //         editStatus = true;
                //         id = doc.id;
                //         console.log(id);

                //         // if (editStatus === true) {
                //         //     await editDataPost(id, contentPost.value);
                //         //     sectionModalPost.classList.remove('show-modal');
                //         //     contentPost.value = '';
                //         // }
                //     });
                // });

                // Eliminar un post
                const btnDelete = document.querySelectorAll('#btnDelete');
                btnDelete.forEach(btn => {
                    btn.addEventListener('click', async (e) => {
                        swal({
                            title: "¿Estás seguro?",
                            text: "Una vez eliminado, no podrá recuperar este post.",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                        })
                        .then((willDelete) => {
                            if (willDelete) {
                                deleteDataPost(e.target.dataset.id);
                                swal("El post ha sido eliminado.", {
                                    icon: "success",
                                });
                            } else {
                                swal("Tu post está a salvo.");
                            }
                        });
                    });
                });
            });
            return articlePost;
        });
    }

    // Abrir modal para crear post
    btnCreatePost.addEventListener('click', (e) => {
        e.preventDefault();
        sectionModalPost.classList.add('show-modal');
        btnPublishPost.innerText = 'Publicar post';

        // Crear post
        btnPublishPost.addEventListener('click', async (e) => {
            e.preventDefault();
            // const contentPost = document.querySelector('#textAreaPost');
            const email = currentUser().email;
            const nameUser = currentUser().displayName;
            const photoUser = currentUser().photoURL;
            const uid = currentUser().uid;

            const photoPost = document.querySelector('#photoPost');
            const file = photoPost.files[0];
            const path = 'imagesPost';

            if (contentPost.value.length === 0) {
                btnPublishPost.disabled = false;

                if (photoPost.files.length === 1) {
                    btnPublishPost.disabled = true;

                    const namePhoto = file.name;
                    const metadata = { contentType: file.type }

                    uploadFileStorage(path, namePhoto, file, metadata)
                    .then(() => getFileStorage(path, namePhoto))
                    .then(url => {
                        createPost(contentPost.value, email, nameUser, photoUser, uid, url);
                        sectionModalPost.classList.remove('show-modal');;
                    });
                } else {
                    btnPublishPost.disabled = false;
                }
            } else if (contentPost.value.length !== 0) {
                btnPublishPost.disabled = true;
                if (photoPost.files.length === 1) {

                    const namePhoto = file.name;
                    const metadata = { contentType: file.type }

                    uploadFileStorage(path, namePhoto, file, metadata)
                    .then(() => getFileStorage(path, namePhoto))
                    .then(url => {
                        createPost(contentPost.value, email, nameUser, photoUser, uid, url);
                        sectionModalPost.classList.remove('show-modal');;
                    });
                } else {
                    createPost(contentPost.value, email, nameUser, photoUser, uid, '');
                    sectionModalPost.classList.remove('show-modal');;

                }
            }
        })
    });

    // Cerrar el modal para post
    const btnClose = document.querySelector('#btnClose');
    btnClose.addEventListener('click', () => {
        sectionModalPost.classList.remove('show-modal');
    });

    showAllPost();
}