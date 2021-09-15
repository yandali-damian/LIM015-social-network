import { components } from '../views/index.js';

export const changeView = (route) => {

    console.log(route);

    const container = document.getElementById('container');
    container.innerHTML = "";

    switch (route) {
        case '':
        case '#':
        case '#/':
            { return container.appendChild(components.login()) }
        case '#/register':
            { return container.appendChild(components.register()) }
        case '':
        default:
            { return container.appendChild(components.error()) }
    }
};