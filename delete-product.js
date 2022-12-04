import { fetchservices } from "./fetch.js";

/* ESPERA PARA QUE CARGUEN LOS PRODUCTOS */
const espera = () => {
    return fetch("http://localhost:3000/ligas").then((respuesta) => respuesta.json());
}
espera().then(() => {
    eliminar();
})

/* AÑADIR EVENTO AL ICONO DE BASURA */
const eliminar = () => {
    const trash = document.querySelectorAll(".filtro__link-trash");
    trash.forEach((ico) => {
        ico.addEventListener("click", eliminarClient);
    });
}

/* ELIMINAR PRODUCTO DE TODAS LAS CATEGORIAS */
function eliminarClient(event){
    const icoId = event.target;
    console.log(icoId);
    let cat = icoId.id;
    let link = icoId.parentElement;
    link = link.id;
    fetchservices.eliminarCliente(cat, link);
} 

