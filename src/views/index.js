// Registrar las vistas
import { login } from './login.js';
import { home } from './home.js';
import { signup } from './signup.js';
import { error } from './error.js';

const components = {
    login: login,
    signup: signup,
    home: home,
    error: error
}

export { components };