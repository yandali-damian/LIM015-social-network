const setErrorSignup = (input) => {
    const formInputs = input.parentElement;
    formInputs.className = 'form-signup-inputs error';
}

const setSuccessSignup = (input) => {
    const formInputs = input.parentElement;
    formInputs.className = 'form-signup-inputs success';
}

const emailOk = (email) => {
    const expEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expEmail.test(email);
}


const inputs=document.querySelectorAll('.signup-inputs');

const expression = {
	expName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	expPassword: /^.{4,12}$/, // 4 a 12 digitos.
	expEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const validateSignup = () => {

    const nameSignup = document.getElementById('nameSignup');
    const emailSignup = document.getElementById('emailSignup');
    const passwordSignup = document.getElementById('passwordSignup');
    const confirmSignup = document.getElementById('confirmSignup');

    const name = nameSignup.value.trim().replace(/[0-9]/g, '');
    const email = emailSignup.value.trim();
    const password = passwordSignup.value.trim();
    const confirm = confirmSignup.value.trim();

    const msg = document.querySelector('#smsEP');

    if (name === '') {
        setErrorSignup(nameSignup);
    }else{
		setSuccessSignup(nameSignup);
    }

    if (email === '') {
        setErrorSignup(emailSignup);
    }else if (!emailOk(email)) {
        setErrorSignup(emailSignup);
    }else{
        setSuccessSignup(emailSignup);
    }

    if (password === '') {
        setErrorSignup(passwordSignup);
    }else{
        setSuccessSignup(passwordSignup);
    }

    if (confirm === '') {
        setErrorSignup(confirmSignup);
    }else if (password !== confirm) {
        setErrorSignup(confirmSignup);
        msg.innerHTML = '';
        msg.innerHTML = `La contraseña no coincide`;
    }else{
        setSuccessSignup(confirmSignup);
    }

    if(inputs.length <= 4){
        msg.classList.add('msg-EP-active');
        msg.innerHTML = `<i class="fas fa-exclamation-triangle">
                        Completar todos los campos`;
    }
}

export { validateSignup, setErrorSignup, setSuccessSignup };