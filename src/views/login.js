import { auth } from '../firebase/config-firebase.js'
// import { singIn } from '../firebase/singin.js'

//Función para iniciar sesion
const login = () => {
    const viewLogin = `<form>
                    <figure class="figure-img"><img class="img-login" src="./img/login.png" alt=""></figure>
                        <section class="section-data" id="sectionData">
                            <figure><img class="img-title" src="./img/warique.png" alt=""></figure>
                            <input type="email" placeholder=" Email" class="input-email" id="inputEmail">
                            <input type="password" placeholder=" Password" class="input-password" id="inputPassword">
                            <p id="pEmail" style="color:red; top:390px; left:90px; display:none">* Ingrese su correo</p>
                            <p id="pPassword" style="color:red; top:455px; left:90px; display:none">* Ingrese su contraseña</p>
                            <div id="smsEP"></div>
                            <button class="btn-login" id="btnLogin">Log in</button>
                            <p class="p-login">O bien ingresa con ...</p>
                            <figure>
                                <img class="img-google" id="imgGoogle" src="./img/google.png" alt="">
                            </figure>
                            <p class="p-account">¿No tienes una cuenta?</p>
                            <a href="#/register" class="register" id="register">Sign in</a>
                        </section></form>`;
    const elementDiv = document.createElement('div');
    elementDiv.className = 'div-login';
    elementDiv.innerHTML = viewLogin;

    const btnLogin = elementDiv.querySelector('#btnLogin');
    const pPassword = elementDiv.querySelector('#pPassword');
    const pEmail = elementDiv.querySelector('#pEmail');

    btnLogin.addEventListener('click', (e) => {
        e.preventDefault();

        const email = elementDiv.querySelector('#inputEmail').value;
        const password = elementDiv.querySelector('#inputPassword').value;
        const msg = elementDiv.querySelector('#smsEP')
        let formValid = true;

        if (email === '') {
            pEmail.style.display = 'block';
            msg.style.display = 'none';
            formValid = false;
        } else {
            pEmail.style.display = 'none';
        }

        if (password === '') {
            pPassword.style.display = 'block';
            msg.style.display = 'none';
            formValid = false;
        } else {
            pPassword.style.display = 'none';
        }

        if (formValid) {

            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    window.location.href = '#/home';
                })
                .catch((error) => {
                    msg.style.display = 'block';
                    msg.innerHTML = `<p class="smsError">Correo electrónico/contraseña incorrecta</p>`;
                });

        }
    });


    return elementDiv;
}

export { login };