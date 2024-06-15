let titulo = document.getElementById("formTitle");
let emailGroup = document.getElementById("emailGroup");
let confirmPasswordGroup = document.getElementById("confirmPasswordGroup");
let cambiarDato = document.getElementById("cambiarDato");
let cambiarRegisterLogin = document.getElementById("buttonActions");

cambiarDato.addEventListener('click', function () {
    if (titulo.textContent === 'Register') {
        titulo.textContent = "Login"; // Cambia el título del h2
        cambiarDato.textContent = "Register"; // Cambia el dato
        cambiarRegisterLogin.textContent = "Login"; // Cambia el botón
        emailGroup.style.display = "none"; // Desaparece el campo de email
        confirmPasswordGroup.style.display = "none"; // Desaparece el campo de confirmación de contraseña
    } else {
        titulo.textContent = 'Register'; // Cambia el título del h2
        cambiarDato.textContent = "Login"; // Cambia el dato
        cambiarRegisterLogin.textContent = "Register"; // Cambia el botón
        emailGroup.style.display = "block"; // Aparece el campo de email
        confirmPasswordGroup.style.display = "block"; // Aparece el campo de confirmación de contraseña
    }
});

cambiarRegisterLogin.addEventListener("click", function (event) {
    event.preventDefault(); // Evita el envío del formulario
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Verificar si todos los campos están vacíos
    if (username.length === 0 && email.length === 0 && password.length === 0 && confirmPassword.length === 0) {
        return alert("Todos los campos están vacíos");
    }

    let mensaje = "";
    let noCamposVacios = true;

    if (username.length === 0) { 
        mensaje += "El campo username está vacío\n";
        noCamposVacios = false;
    }
    if (titulo.textContent === 'Register' && email.length === 0) {  
        mensaje += "El campo email está vacío\n";
        noCamposVacios = false;
    }
    if (titulo.textContent === 'Register' && !validarEmail(email)) {
        mensaje += "El formato del email no es válido\n";
        noCamposVacios = false;
    }
    if (password.length === 0) {  
        mensaje += "El campo password está vacío\n";
        noCamposVacios = false;
    }
    if (titulo.textContent === 'Register' && confirmPassword.length === 0) {
        mensaje += "El campo Confirm password está vacío\n";
        noCamposVacios = false;
    }
    
    // Mostrar mensaje de campos vacíos si los hay
    if (!noCamposVacios) {
        return alert(mensaje);
    }
    //Verificar que las contraseña tenga mas de 8 carasteres
    if (titulo.textContent === "Register" && password.length < 8 && confirmPassword.length <8) {
        return alert("Las contraseña no puede ser menor a 8 caracteres");
    }
    // Verificar si las contraseñas coinciden (solo en modo Register)
    if (titulo.textContent === "Register" && password !== confirmPassword) {
        return alert("Las contraseñas no son iguales");
    }

    // Aquí puedes agregar el código para enviar el formulario o realizar otras acciones
    alert(titulo.textContent === 'Register' ? "Registro exitoso" : "Inicio de sesión exitoso");

        // Limpiar todos los campos de entrada después del registro o inicio de sesión exitoso
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
});
    //Ni de como funciona copypaste
    function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
} 