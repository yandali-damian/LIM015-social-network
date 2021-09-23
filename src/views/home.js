// funcion para mostrar el home
const home = () => {
    const headerHome = document.querySelector('#headerHome');

    headerHome.innerHTML = `<nav class="nav" id="nav">
                                <a href="#/home" >
                                    <figure class="figure-title">
                                        <img class="title" src="./img/warique.png" alt="Warique" />
                                    </figure>
                                </a>
                                <button class="nav-toggle" id="navToggle">
                                    <i class="fas fa-bars"></i>
                                </button>
                                <ul class="nav-menu" id="navMenu">
                                    <li class="nav-menu-item">
                                        <a href="#/Home" class="nav-menu-link">Inicio</a>
                                    </li>
                                    <li class="nav-menu-item">
                                        <a href="#/Profile" class="nav-menu-link">Perfil</a>
                                    </li>
                                    <li class="nav-menu-item">
                                        <a href="#/Signout" class="nav-menu-link">Cerrar sesión</a>
                                    </li>
                                </ul>
                            </nav>`;

    const navToggle = document.querySelector('#navToggle');
    const navMenu = document.querySelector('#navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-menu_visibily');
    });

    const footer = document.querySelector('#footer');
    footer.style.display = 'block';

    return headerHome;
}

export { home };