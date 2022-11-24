export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
        console.log("input valido")
        input.classList.remove("contact-form__input--invalid");
        input.parentElement.querySelector(".input__error").innerHTML = "";
    } 
    else { 
        input.classList.add("contact-form__input--invalid");
        input.parentElement.querySelector(".input__error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch"
];

const mensajesDeError = {
    name: {
        valueMissing: "El campo nombre no puede estar vacío",
    },
    mail: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
}

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    /* Recorrer cada error posible y analizar si el input posee dicho error */
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
}