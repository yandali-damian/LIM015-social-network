// Función para ruta no encontrada (error 404)
const error = () => {
    const viewError = `<h1>Pagina no encontrado</h1>`;
    const elementDiv = document.createElement('div');
    elementDiv.innerHTML = viewError;

    return elementDiv;
}


export { error };