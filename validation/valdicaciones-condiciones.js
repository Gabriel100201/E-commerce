export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
        input.classList.remove("contact-form__input--invalid");
        input.parentElement.querySelector(".input__error").innerHTML = "";
    } 
    else { 
        input.classList.add("contact-form__input--invalid");
        input.parentElement.querySelector(".input__error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}
export function valida2(input){
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
        input.classList.remove("log-section__input--invalid");
        input.parentElement.querySelector(".form__input-error").innerHTML = "";
    } 
    else { 
        input.classList.add("log-section__input--invalid");
        console.log(mostrarMensajeDeError(tipoDeInput, input));
        input.parentElement.querySelector(".form__input-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}
export function valida3(input){
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
        input.classList.remove("form__input--invalid");
        input.parentElement.querySelector(".form__input-error").innerHTML = "";
    } 
    else { 
        input.classList.add("form__input--invalid");
        console.log(mostrarMensajeDeError(tipoDeInput, input));
        input.parentElement.querySelector(".form__input-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
];

const mensajesDeError = {
    name: {
        valueMissing: "El campo nombre no puede estar vacío",
    },
    mail: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
        patternMismatch: "El formato del correo no es válido"
    },
    mensaje: {
        valueMissing: "El campo Mensaje no puede estar vacío",
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacío",
    },
    categoria: {
        valueMissing: "El campo categoria no puede estar vacío",
    },
    price: {
        valueMissing: "El campo precio no puede estar vacío"
    }
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