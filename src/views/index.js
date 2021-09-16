// Registrar las vistas
import { login } from './login.js';
import { home } from './home.js';
import { register } from './register.js';
import { error } from './error.js';

const components = {
    login: login,
    register: register,
    home: home,
    error: error
}

export { components };