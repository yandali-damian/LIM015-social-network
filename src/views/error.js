// Función para ruta no encontrada (error 404)
const error = () => {
    const viewError = document.createElement('div');
    viewError.innerHTML = `<figure>
                                <img class="img-404" src="./img/404.png">
                            </figure>`;
    return viewError;
}


export { error };