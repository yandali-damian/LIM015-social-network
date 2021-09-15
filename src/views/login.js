//funcion para log in
export default () => {
    const viewLogin = `<figure class="figure-img"><img src="./img/login.png" alt=""></figure>
                        <section class="section-data" id="sectionData">
                            <figure><img class="img-login" src="./img/warique.png" alt=""></figure>
                            <input type="email" placeholder=" Email" class="input-email" id="inputEmail">
                            <input type="password" placeholder=" Password" class="input-password" id="inputPassword">
                            <button class="btn-login" id="btnLogin">Log in</button>
                            <p class="p-login">O bien ingresa con ...</p>
                            <figure>
                                <img class="img-facebook" src="./img/facebook.png" alt="">
                                <img class="img-google" src="./img/google.png" alt="">
                            </figure>
                            <p class="p-account">¿No tienes una cuenta?</p>
                            <a href="#/register" class="register" id="register">Regístrate</a>
                        </section>`;
    const elementDiv = document.createElement('div');
    elementDiv.innerHTML = viewLogin;

    return elementDiv;
}