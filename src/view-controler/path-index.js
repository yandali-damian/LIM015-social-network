import { components } from '../views/index.js';
import { createAccount } from '../firebase/signup-db.js';
import { loginDB, googleLogIn } from '../firebase/login-db.js';

export const changeView = (route) => {

    console.log(route);

    const container = document.getElementById('container');
    container.innerHTML = ""; //Limpia en contenedor de las vistas

    switch (route) {
        case '':
        case '#':
        case '#/':
            {
                const login = container.appendChild(components.login());
                loginDB();
                googleLogIn();
                return login
            }
        case '#/signup':
            {
                const signup = container.appendChild(components.signup());
                createAccount();
                return signup;
            }
        case '#/home':
            { return container.appendChild(components.home()) }
        default:
            { return container.appendChild(components.error()) }
    }
};