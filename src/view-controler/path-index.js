import { components } from '../views/index.js';
import { createAccount } from '../firebase/signup-db.js';

export const changeView = (route) => {

    console.log(route);

    const container = document.getElementById('container');
    container.innerHTML = ""; //Limpia en contenedor de las vistas

    switch (route) {
        case '':
        case '#':
        case '#/':
            { return container.appendChild(components.login()) }
        case '#/signup':
            {
                const signup =  container.appendChild(components.signup());
                createAccount();
                return signup;
            }
        case '#/home':
            { return container.appendChild(components.home()) }
        default:
            { return container.appendChild(components.error()) }
    }
};