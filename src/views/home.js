// funcion para mostrar el home
const home = () => {
    const viewHome = document.createElement('section');
    viewHome.innerHTML = `<header class="header-home" id="headerHome">
                                <nav class="nav" id="nav">
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
                                </nav>
                            </header>
                            <footer>
                                <p>&copy; 2021 - Developed by Grecia &amp; Yandali</p>
                            </footer>`;

    const navToggle = viewHome.querySelector('#navToggle');
    const navMenu = viewHome.querySelector('#navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-menu_visibily');
    });

    return viewHome;
}

export { home };