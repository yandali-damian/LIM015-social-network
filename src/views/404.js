export default () => {
    const viewError = `<h1>Pagina no encontrado</h1>`;
    const elementDiv = document.createElement('div');
    elementDiv.innerHTML = viewError;

    return elementDiv;
}