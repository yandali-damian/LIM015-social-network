// Función para registrar un usuario
const signup = () => {
    const viewSignup = document.createElement('article');
    viewSignup.className = 'article-signup';
    viewSignup.innerHTML = `<figure class="figure-signup">
                                <img class="img-signup" src="./img/login.png" alt="signup" />
                            </figure>
                            <article class="content">
                                <figure class="figure-title-signup">
                                    <img class="img-signup-title" src="./img/warique.png" alt="Warique" />
                                </figure>
                                <span class="span-signup">&boxh;&boxh;&boxh;&boxh;&boxh; Regístrate &boxh;&boxh;&boxh;&boxh;&boxh;</span>
                                <form action="#" class="form-signup" id="formSignup">
                                    <input type="text" class="name-signup" id="nameSignup" placeholder="Name" />
                                    <span id="pName" class="span-name">* Ingrese su nombre</span>
                                    <input type="email" class="email-signup" id="emailSignup" placeholder="Email" />
                                    <span id="pEmail" class="span-email">* Ingrese su Email</span>
                                    <input type="password" class="password-signup" id="passwordSignup" placeholder="Password" />
                                    <span id="pPasword" class="span-password">* Ingrese su contraseña</span>
                                    <input type="password" class="confirm-signup" id="confirmSignup" placeholder="Confirm Password" />
                                    <span id="pConfPasword" class="span-confpassword">* Confirme su contraseña</span>
                                    <span id="smsEP"></span>
                                    <button type="submit" class="btn-signup" id="btnSignup">Registrarse</button>
                                </form>
                                <span class="span-loginWith">O ingresa con ...</span>
                                <figure class="figure-google">
                                    <img class="img-google-signup" src="./img/google.png" alt="google" />
                                </figure>
                                <div>
                                    <span class="span-login">¿Ya tienes cuenta?</span>
                                    <a href="#/" class="a-login" id="aLogin">Iniciar sesión</a>
                                </div>
                            </article>`;

    return viewSignup;
}

export { signup };