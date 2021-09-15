//Función para iniciar sesion
const login = () => {
    const viewLogin = `<figure class="figure-img"><img src="./img/login.png" alt=""></figure>
                        <section class="section-data" id="sectionData">
                            <figure><img class="img-login" src="./img/warique.png" alt=""></figure>
                            <input type="email" placeholder=" Email" class="input-email" id="inputEmail">
                            <input type="password" placeholder=" Password" class="input-password" id="inputPassword">
                            <button class="btn-login" id="btnLogin">Log in</button>
                            <p class="p-login">O bien ingresa con ...</p>
                            <figure>
                                <img class="img-google" src="./img/google.png" alt="">
                            </figure>
                            <p class="p-account">¿No tienes una cuenta?</p>
                            <a href="#/register" class="register" id="register">Sign in</a>
                        </section>`;
    const elementDiv = document.createElement('div');
    elementDiv.innerHTML = viewLogin;

    return elementDiv;
}

// Función para registrarse
const register = () => {
    const viewRegister = `<figure><img class="img-register" src="./img/warique.png" alt=""></figure>
                        <p class="line-register">&boxh;&boxh;&boxh;&boxh;&boxh; Sign in &boxh;&boxh;&boxh;&boxh;&boxh;</p>
                        <input type="text" placeholder=" Name" class="name-register" id="inputNameR">
                        <input type="email" placeholder=" Email" class="email-register" id="inputEmailR">
                        <input type="password" placeholder=" Password" class="password-register" id="inputPasswordR">
                        <input type="password" placeholder=" Confirm Password" class="confirm-register" id="inputConfirmR">
                        <button class="btn-register" id="btnRegister">Registrar</button>
                        <p class="p-register">O bien ingresa con ...</p>
                        <figure>
                            <img class="google-register" src="./img/google.png" alt="">
                        </figure>
                        <a href="#/" class="back" id="back"><img src="./img/back.png"></a>`;

    const back = document.getElementById('btnBack');

    const elementDiv = document.createElement('div');
    elementDiv.innerHTML = viewRegister;

    return elementDiv;
}

// Función para ruta no encontrada (error 404)
const error = () => {
    const viewError = `<h1>Pagina no encontrado</h1>`;
    const elementDiv = document.createElement('div');
    elementDiv.innerHTML = viewError;

    return elementDiv;
}

export {login, register, error};