//Agrega funcionalidades extra, como la opción de recordar la sesión del usuario, cambiar entre el modo de inicio de sesión y el modo de registro, etc.

let enviar = document.getElementById("enviar");

enviar.addEventListener("click", function(event) {
    // Prevenir el comportamiento por defecto del formulario
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let contraseña = document.getElementById("contraseña").value;
    let confirmarContraseña = document.getElementById("confirmarContraseña").value;
    let terminos = document.getElementById("checkbox").checked;

    // Verificar si todos los campos están vacíos
    if (nombre.length === 0 && email.length === 0 && contraseña.length === 0 && confirmarContraseña.length === 0) {
        alert("Todos los campos están vacíos");
        return;
    }

    let mensaje = "";
    // Verificar campos individuales
    if (nombre.length === 0) {
        mensaje += "El campo Nombre está vacío\n";
    }
    if (email.length === 0) {
        mensaje += "El campo Email está vacío\n";
    }
    if (contraseña.length === 0) {
        mensaje += "El campo Contraseña está vacío\n";
    }
    if (confirmarContraseña.length === 0) {
        mensaje += "El campo Confirmar Contraseña está vacío\n";
    }
    if (!terminos) {
        mensaje += "Debes aceptar los términos y condiciones\n";
    }

    // Mostrar mensaje si hay campos vacíos
    if (mensaje.length > 0) {
        alert(mensaje);
        return;
    }

    // Verificar si las contraseñas son iguales
    if (contraseña !== confirmarContraseña) {
        alert("Las contraseñas no son iguales");
        return;
    }

    // Aquí puedes agregar el código para enviar el formulario o cualquier otra acción
    alert("Formulario enviado correctamente");
});


