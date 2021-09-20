//Función para iniciar sesion
const login = () => {
    const viewLogin = document.createElement('article');
    viewLogin.className = 'article-login';
    viewLogin.innerHTML = `<figure class="figure-login">
                                <img class="img-login" src="./img/login.png" alt="login">
                            </figure>
                            <article class="content">
                                <figure class="figure-title">
                                    <img class="img-title" src="./img/warique.png" alt="Warique" />
                                </figure>
                                <form action="#" class="form-login" id="formLogin">
                                    <input type="email" placeholder="Email" class="email-login" id="inputEmail" />
                                    <span id="pEmail" class="span-email">* Ingrese su correo</span>
                                    <input type="password" placeholder=" Password" class="password-login" id="inputPassword" />
                                    <span id="pPassword" class="span-password">* Ingrese su contraseña</span>
                                    <span id="smsEP"></span>
                                    <button class="btn-login" id="btnLogin">Iniciar Sesión</button>
                                </form>
                                <span class="p-login">O bien ingresa con ...</span>
                                <figure class="figure-google">
                                    <img class="img-google" id="imgGoogle" src="./img/google.png" alt="google" />
                                </figure>
                                <div>
                                    <span class="p-account">¿No tienes una cuenta?</span>
                                    <a href="#/signup" class="register" id="register">Regístrate</a>
                                </div>
                            <article>`;

    return viewLogin;
}

export { login };