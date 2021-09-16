//Función para iniciar sesion
const login = () => {
    const viewLogin = `<form>
                    <figure class="figure-img"><img class="img-login" src="./img/login.png" alt=""></figure>
                        <section class="section-data" id="sectionData">
                            <figure><img class="img-title" src="./img/warique.png" alt=""></figure>
                            <input type="email" placeholder=" Email" class="input-email" id="inputEmail">
                            <input type="password" placeholder=" Password" class="input-password" id="inputPassword">
                            <button class="btn-login" id="btnLogin">Log in</button>
                            <p class="p-login">O bien ingresa con ...</p>
                            <figure>
                                <img class="img-google" src="./img/google.png" alt="">
                            </figure>
                            <p class="p-account">¿No tienes una cuenta?</p>
                            <a href="#/register" class="register" id="register">Sign in</a>
                        </section></form>`;
    const elementDiv = document.createElement('div');
    elementDiv.className = 'div-login';
    elementDiv.innerHTML = viewLogin;
    return elementDiv;
}

// const btnLogin = document.getElementById('btnLogin');
// btnLogin.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('hola mundo');
// });

export { login };