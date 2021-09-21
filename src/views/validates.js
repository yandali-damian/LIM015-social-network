const setErrorSignup = (input, message) => {
    const formInputs = input.parentElement;
    const alert = formInputs.querySelector('small');
    formInputs.className = 'form-signup-inputs error';
    alert.innerText = message;
}

const setSuccessSignup = (input) => {
    const formInputs = input.parentElement;
    formInputs.className = 'form-signup-inputs success';
}

const emailOk = (email) => {
    const expEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expEmail.test(email);
}

const validateSignup = () => {

    const nameSignup = document.getElementById('nameSignup');
    const emailSignup = document.getElementById('emailSignup');
    const passwordSignup = document.getElementById('passwordSignup');
    const confirmSignup = document.getElementById('confirmSignup');

    const name = nameSignup.value.trim();
    const email = emailSignup.value.trim();
    const password = passwordSignup.value.trim();
    const confirm = confirmSignup.value.trim();

    if (name === '') {
        setErrorSignup(nameSignup, 'Ingrese su nombre');
    }else{
		setSuccessSignup(nameSignup);
    }

    if (email === '') {
        setErrorSignup(emailSignup, 'Ingrese su correo');
    }else if (!emailOk(email)) {
        setErrorSignup(emailSignup, 'No ingreso un correo electronico válido');
    }else{
        setSuccessSignup(emailSignup);
    }

    if (password === '') {
        setErrorSignup(passwordSignup, 'Ingrese una contraseña');
    }else{
        setSuccessSignup(passwordSignup);
    }

    if (confirm === '') {
        setErrorSignup(confirmSignup, 'Ingrese una contraseña');
    }else if (password !== confirm) {
        setErrorSignup(confirmSignup, 'Contraseñas no coinciden');
    }else{
        setSuccessSignup(confirmSignup);
    }
}

export { validateSignup };