import { modalPost } from '../views/modal.js';

// importar de firebase
import { createPost, getAllPost, getPost, editDataPost, deleteDataPost } from '../firebase/fb-firestore.js';
import { currentUser } from '../firebase/fb-auth.js';
import { uploadFileStorage, getFileStorage } from '../firebase/fb-storage.js';

export const post = () => {
    const btnCreatePost = document.querySelector('#btnCreatePost');
    const sectionModalPost = document.querySelector('#sectionModalPost');

    let editStatus = false;
    let id = '';

    // Crear post
    const addPost = () => {
        const btnPublishPost = document.querySelector('#btnPublishPost');
        btnPublishPost.addEventListener('click', async (e) => {
            e.preventDefault();
            const contentPost = document.querySelector('#textAreaPost');
            const email = currentUser().email;
            const nameUser = currentUser().displayName;
            const photoUser = currentUser().photoURL;
            const uid = currentUser().uid;

            const photoPost = document.querySelector('#photoPost');
            const file = photoPost.files[0];
            const path = 'imagesPost';
                if (editStatus === false) {
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
                                sectionModalPost.classList.remove('show-modal');
                            });
                        } else {
                            createPost(contentPost.value, email, nameUser, photoUser, uid, '');
                            sectionModalPost.classList.remove('show-modal');
                        }
                    }
                } else if (editStatus === true) {
                    await editDataPost(id, { post: contentPost.value });
                    sectionModalPost.classList.remove('show-modal');
                }
        });
    }

    // Abrir modal para crear post
    btnCreatePost.addEventListener('click', (e) => {
        e.preventDefault();
        sectionModalPost.classList.add('show-modal');
        modalPost();
        addPost();
        close();
    });

    const showAllPost = () => {
        getAllPost().onSnapshot(querySnapshot => {
            const articlePost = document.querySelector('#articlePost');
            articlePost.innerHTML = '';
            querySnapshot.forEach(doc => {
                const infoPost = doc.data();
                // console.log(infoPost);
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
                                            <div class="content-btn-like">
                                                <button class="btn-like" id="btnLike"><i class="far fa-heart"></i></button>
                                            </div>
                                            <div class="div-buttons" id="divButtons" data-id="${infoPost.uid}">
                                                <button class="btn-edit" data-id="${doc.id}"><i class="fas fa-edit"></i>Edit</button>
                                                <button class="btn-delete" data-id="${doc.id}"><i class="fas fa-trash-alt"></i>Delete</button>
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

                // Ocultar botones(editar y eliminar), por usuario logeado
                const containerButtons = document.querySelectorAll('#divButtons');
                containerButtons.forEach(element => {
                    const loggedUser = element.dataset.id;
                    if (currentUser().uid !== loggedUser) {
                        element.style.display = 'none';
                    } else {
                        element.style.display = 'flex';
                    }
                });

                // Editar post
                const btnEdit = document.querySelectorAll('.btn-edit');
                btnEdit.forEach(btn => {
                    btn.addEventListener('click', async (e) => {
                        try {
                            const doc = await getPost(e.target.dataset.id);
                            console.log(doc);

                            sectionModalPost.classList.add('show-modal');
                            modalPost();

                            const btnActualizar = document.querySelector('#btnPublishPost');
                            btnActualizar.innerText = 'Editar';

                            close();

                            editStatus = true;

                            const contentPost = document.querySelector('#textAreaPost');
                            contentPost.value = doc.data().post;

                            id = doc.id;
                            console.log(id);

                            addPost();

                        } catch (error) {
                            console.log(error);
                        }
                    });
                });

                // ELiminar post
                const btnDelete = document.querySelectorAll('.btn-delete');
                btnDelete.forEach(btn => {
                    btn.addEventListener('click', async (e) => {
                        try {
                            const id = e.target.dataset.id;
                            swal({
                                title: "¿Estás seguro?",
                                text: "Una vez eliminado, no podrá recuperar este post.",
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                            })
                            .then((willDelete) => {
                                if (willDelete) {
                                    deleteDataPost(id);
                                    swal("El post ha sido eliminado.", {
                                        icon: "success",
                                    });
                                } else {
                                    swal("Tu post está a salvo.");
                                }
                            });
                        } catch (error) {
                            console.log(error);
                        }
                    });
                });

                // Like post

                return articlePost;
            });
        });
    }
    showAllPost();
}

const close = () => {
    // Cerrar el modal para post
    const btnClose = document.querySelector('#btnClose');
    btnClose.addEventListener('click', () => {
        sectionModalPost.classList.remove('show-modal');
    });
}