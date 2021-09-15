// funcnion para registrarse
export default () => {
    const viewRegister = `<figure><img class="img-register" src="./img/warique.png" alt=""></figure>
                        <input type="text" placeholder=" Name" class="name-register" id="inputNameR">
                        <input type="email" placeholder=" Email" class="email-register" id="inputEmailR">
                        <input type="password" placeholder=" Password" class="password-register" id="inputPasswordR">
                        <input type="password" placeholder=" Confirm Password" class="confirm-register" id="inputConfirmR">
                        <p class="sexo-register">Sexo</p>
                        <div class="container-div">
                            <input type="radio" id="radioF" name="sexo" value="F" checked>
                            <label for="radioF">F</label>
                            <input type="radio" id="radioM" name="sexo" value="M">
                            <label for="radioM">M</label>
                            <input type="radio" id="radioOtro" name="sexo" value="Otro">
                            <label for="radioOtro">Otro</label>
                        </div>
                        <p class="line-register">__________ Log in __________</p>
                        <button class="btn-register" id="btnRegister">Registrar</button>
                        <p class="p-register">O bien ingresa con ...</p>
                        <figure>
                            <img class="facebook-register" src="./img/facebook.png" alt="">
                            <img class="google-register" src="./img/google.png" alt="">
                        </figure>`;

    const elementDiv = document.createElement('div');
    elementDiv.innerHTML = viewRegister;

    return elementDiv;
}