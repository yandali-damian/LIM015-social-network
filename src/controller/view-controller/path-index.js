import { components } from '../../views/index.js';
import { createAccount } from '../signup.js';
import { loginDB } from '../login.js';
import { profile } from '../../views/profile.js';
import { signout } from '../../firebase/signup-db.js';
import { auth } from '../../firebase/config-firebase.js';

// import { infoUsers } from '../firebase/profile-home.js.js';

export const changeView = (route) => {

    console.log(route);

    const container = document.getElementById('container');
    container.innerHTML = ""; //Limpia en contenedor de las vistas

    switch (route) {
        case '':
        case '#':
        case '#/':
            {
                if (auth.currentUser) {
                    window.location.hash = '#/home';
                } else {
                    const login = container.appendChild(components.login()); // Diseño Vista Login
                    loginDB(); //Eventos Vista Login
                    return login;
                }
            }
        case '#/signup':
            {
                if (auth.currentUser) {
                    window.location.hash = '#/home';
                } else {
                    const signup = container.appendChild(components.signup()); // Diseño Vista Registrarse
                    createAccount(); //Eventos Vista Registrarse
                    return signup;
                }
            }
        case '#/home':
            {
                if (auth.currentUser) {
                    const home = container.appendChild(components.home());
                    profile();
                    return home;
                } else {
                    window.location.hash = '#/';
                }
            }
        case '#/signout':
            {
                signout().then(() => {
                    window.location.hash = '#/';
                });
            }
        default:
            { return container.appendChild(components.error()) }
    }
};