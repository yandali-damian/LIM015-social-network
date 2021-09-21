// Función para registrar un usuario
const signup = () => {
    const viewSignup = document.createElement('article');
    viewSignup.className = 'article-signup';
    viewSignup.innerHTML = `<figure class="figure-signup">
                                <img class="img-signup" src="./img/login.svg" alt="signup" />
                            </figure>
                            <article class="content">
                                <figure class="figure-title-signup">
                                    <img class="img-title" src="./img/warique.png" alt="Warique" />
                                </figure>
                                <span class="span-signup">&boxh;&boxh;&boxh;&boxh;&boxh; Regístrate &boxh;&boxh;&boxh;&boxh;&boxh;</span>
                                <form action="#" class="form-signup" id="formSignup">
                                    <div class="form-signup-inputs" id="formSignupName" >
                                        <input type="text" class="signup-inputs" id="nameSignup" placeholder="Name" />
                                        <i class="icon icon-success fas fa-check-circle"></i>
                                        <i class="icon icon-error fas fa-exclamation-circle"></i>
                                        <small class="msg-error">Message error</small >
                                    </div>
                                    <div class="form-signup-inputs" id="formSignupEmail">
                                        <input type="email" class="signup-inputs" id="emailSignup" placeholder="Email" />
                                        <i class="icon icon-success fas fa-check-circle"></i>
                                        <i class="icon icon-error fas fa-exclamation-circle"></i>
                                        <small class="msg-error">Message error</small >
                                    </div>
                                    <div class="form-signup-inputs" id="formSignupPassword">
                                        <input type="password" class="signup-inputs" id="passwordSignup" placeholder="Password" />
                                        <i class="icon icon-success fas fa-check-circle"></i>
                                        <i class="icon icon-error fas fa-exclamation-circle"></i>
                                        <small class="msg-error">Message error</small >
                                    </div>
                                    <div class="form-signup-inputs" id="formSignupConfirm">
                                        <input type="password" class="signup-inputs" id="confirmSignup" placeholder="Confirm Password" />
                                        <i class="icon icon-success fas fa-check-circle"></i>
                                        <i class="icon icon-error fas fa-exclamation-circle"></i>
                                        <small class="msg-error">Message error</small >
                                    </div>
                                    <div class="msg-complete-inputs">
                                        <span id="smsEP">
                                            <i class="fas fa-exclamation-triangle"></i><b> Error: </b>Completa todos los campos</span>
                                    </div>
                                    <button type="submit" class="btn-signup" id="btnSignup">Registrarse</button>
                                </form>
                                <span class="span-loginWith">O ingresa con ...</span>
                                <figure class="figure-google">
                                    <img class="img-google" src="./img/google.png" alt="google" />
                                </figure>
                                <div>
                                    <span class="span-account">¿Ya tienes cuenta?</span>
                                    <a href="#/" class="a-login-signup" id="aLogin">Iniciar sesión</a>
                                </div>
                            </article>`;

    return viewSignup;
}

export { signup };