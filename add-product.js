import { fetchservices } from "./fetch.js";

const button = document.querySelector(".form__button");
button.addEventListener("click", reciveImg); 

function reciveImg(event) {
    event.preventDefault();
    /* CREAR IMG */
    const file = document.querySelector('#input-img').files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      // convierte la imagen a una cadena en base64
        let imgInput = reader.result;
        crearProducto(imgInput);
    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }
}
    /* CREAR PRODUCTO */
    function crearProducto(img){
      const categoria = document.querySelector(".form__input-cat").value;
      const nombre = document.querySelector(".form__input-nam").value;
      const precio = document.querySelector(".form__input-pri").value;
  /*     const descripcion = document.querySelector(".form__input-des"); */
      fetchservices.insertProduct(categoria, nombre, precio, img).then(() => {
          console.log("Producto creado con exito");
      });
      window.location.href = "todos.html";
}



  