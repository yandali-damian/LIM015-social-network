import { components } from '../views/index.js';
import { createAccount } from '../firebase/signup-db.js';
import { loginDB } from '../firebase/login-db.js';
import { profile } from '../views/profile.js';
import { infoUsers } from '../firebase/profile-home.js';

export const changeView = (route) => {

    console.log(route);

    const container = document.getElementById('container');
    container.innerHTML = ""; //Limpia en contenedor de las vistas

    switch (route) {
        case '':
        case '#':
        case '#/':
            {
                const login = container.appendChild(components.login()); // Diseño Vista Login
                loginDB(); //Eventos Vista Login
                return login
            }
        case '#/signup':
            {
                const signup = container.appendChild(components.signup()); // Diseño Vista Registrarse
                createAccount(); //Eventos Vista Registrarse
                return signup;
            }
        case '#/home':
            {
                const home = container.appendChild(components.home());
                profile();
                return home;
            }
        case '#/signout':
            {
                const login = container.appendChild(components.login()); // Diseño Vista Login
                loginDB(); //Eventos Vista Login
                return login
            }
        default:
            { return container.appendChild(components.error()) }
    }
};