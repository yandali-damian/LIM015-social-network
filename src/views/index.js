// Registrar las vistas

import Login from './login.js';
import Register from './register.js';
import Error from './404.js';

const components = {
    login: Login,
    register: Register,
    error: Error
}

export { components };