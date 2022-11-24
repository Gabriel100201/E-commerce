import { valida } from "./valdicaciones-condiciones.js";
const inputs = document.querySelectorAll(".contact-form__input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
      valida(input.target);
    });
  });