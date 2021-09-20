// funcion para mostrar el home
const home = () => {
    const viewHome = `<figure><img class="img-register" src="./img/warique.png" alt=""></figure>`;

    const elementDiv = document.createElement('div');
    elementDiv.innerHTML = viewHome;

    return elementDiv;
}

export { home };