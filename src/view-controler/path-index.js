import { components } from '../views/index.js';
import { createAccount } from '../firebase/signup-db.js';
import { loginDB } from '../firebase/login-db.js';

export const changeView = (route) => {

    console.log(route);

    const container = document.getElementById('container');
    container.innerHTML = ""; //Limpia en contenedor de las vistas

    const header = document.querySelector('#headerHome');
    const footer = document.querySelector('#footer');

    switch (route) {
        case '':
        case '#':
        case '#/':
            {
                header.style.display = 'none';
                footer.style.display = 'none';
                const login = container.appendChild(components.login());
                loginDB();
                return login
            }
        case '#/signup':
            {
                header.style.display = 'none';
                footer.style.display = "none";
                const signup = container.appendChild(components.signup());
                createAccount();
                return signup;
            }
        case '#/home':
            {
                const home = container.appendChild(components.home());
                return home
            }
        default:
            { return container.appendChild(components.error()) }
    }
};