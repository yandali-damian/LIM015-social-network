// importar firebase
import { auth } from '../../firebase/config-firebase.js';
import { signout } from '../../firebase/signup-db.js';

// importar vistas
import { components } from '../../views/index.js';
import { profile } from '../../views/profile.js';
// import { modalPost } from '../../views/modal.js';

import { loginDB } from '../login.js';
import { createAccount } from '../signup.js';
import { post } from '../post.js';

export const changeView = (route) => {

    const container = document.getElementById('container');
    container.innerHTML = ""; //Limpia en contenedor de las vistas

    switch (route) {
        case '':
        case '#':
        case '#/':
            {
                const login = container.appendChild(components.login()); // Diseño Vista Login
                loginDB(); //Eventos Vista Login
                return login;
            }
        case '#/signup':
            {
                const signup = container.appendChild(components.signup()); // Diseño Vista Registrarse
                createAccount(); //Eventos Vista Registrarse
                return signup;
            }
        case '#/home':
            {
                auth.onAuthStateChanged((user) => {
                    if (user) {
                        const home = container.appendChild(components.home());
                        profile();
                        post();
                        return home;
                    } else {
                        window.location.hash = '#/';
                    }
                });
                break;
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