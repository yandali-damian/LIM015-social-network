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

    const elementDiv = document.createElement('div');
    elementDiv.innerHTML = viewRegister;

    const btnRegister = elementDiv.querySelector(".btn-register");
    btnRegister.addEventListener("click", () => {
        // e.preventDefault();
        console.log("hola");
    });

    return elementDiv;
}


export { register };