const modalPost = () => {
    const viewModalPost = document.querySelector('#sectionModalPost');
    viewModalPost.innerHTML = `<section id="modalPost" class="modal-post">
                                    <h2>Crear Publicación</h2>
                                    <input id="inputPost" class="input-post" type="text" placeholder="¿Cuéntanos donde fuiste a comer?" />
                                    <button id="btnPublicar" class="btn-publicar"> Publicar </button>
                                    <button id="btnClose"> Cerrar </button>
                                </section>`;
    return viewModalPost;
}

export { modalPost };