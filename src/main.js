// Este es el punto de entrada de tu aplicacion

import { changeView } from './view-controler/index.js';

// myFunction();
const init = () => {
    changeView(window.location.hash);
    window.addEventListener('hashchange', () => changeView(window.location.hash)); // detectar cambios de la URL
}
window.addEventListener('load', init);