import { components } from '../views/index.js';

export const changeView = (route) => {

    console.log(route);

    const container = document.getElementById('container');
    container.innerHTML = ""; //Limpia en contenedor de las vistas

    switch (route) {
        case '':
        case '#':
        case '#/':
            { return container.appendChild(components.login()) }
        case '#/register':
            { return container.appendChild(components.register()) }
        case '#/home':
            { return container.appendChild(components.home()) }
        default:
            { return container.appendChild(components.error()) }
    }
};