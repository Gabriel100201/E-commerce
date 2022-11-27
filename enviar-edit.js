const enviarEdit = document.querySelector(".form__button");
enviarEdit.addEventListener("click", reciveImg)

function reciveImg(event) {
  event.preventDefault();
  /* CREAR IMG */
  const file = document.querySelector('#input-img').files[0];
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    // convierte la imagen a una cadena en base64
      imgInput = reader.result;
      actualizarDatos(imgInput);
  }, false);
  if (file) {
    reader.readAsDataURL(file);
  }
}

function actualizarDatos(imgInput){
  let cat = document.querySelector(".form__input-cat");
  let nombre = document.querySelector(".form__input-nam");
  let precio = document.querySelector(".form__input-pri");
  cat = cat.value;
  nombre = nombre.value;
  precio = precio.value;
  const imagen = imgInput;

  
}
