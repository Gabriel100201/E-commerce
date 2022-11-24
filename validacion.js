import { valida } from "./valdicaciones-condiciones.js";
import { valida2 } from "./valdicaciones-condiciones.js";

const inputsForm = document.querySelectorAll(".contact-form__input");
const inputsLogin = document.querySelectorAll(".log-section__input");
const botonLogin = document.querySelector(".form__button-submit");

inputsForm.forEach((inputsForm) => {
    inputsForm.addEventListener("blur", (inputsForm) => {
      valida(inputsForm.target);
    });
  });

inputsLogin.forEach((inputsLogin) => {
    inputsLogin.addEventListener("blur", (inputsLogin) => {
      valida2(inputsLogin.target);
    });
  });

const redirigir = (event) => {
    let mailPassword = [];
    event.preventDefault();
    inputsLogin.forEach((input) => {
        mailPassword.push(input.value);
    })
    if ((mailPassword[0] == "gabrielfunes100202@gmail.com") && (mailPassword[1] == "43280743")){
        window.location.href = "todos.html";
    }
    else {
        const error = document.querySelector(".form__input-invalid");
        error.innerHTML = "Combinación Email - Contraseña no valida";
    }
}

botonLogin.addEventListener("click", redirigir);
