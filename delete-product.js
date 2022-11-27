/* ESPERA PARA QUE CARGUEN LOS PRODUCTOS */
const espera = () => {
    return fetch("http://localhost:3000/mundiales").then((respuesta) => respuesta.json());
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
    let link = icoId.parentElement;
    link = link.id;
    eliminarCliente("mundiales", link).then((resolve) =>{
        console.log(resolve);
    });
    eliminarCliente("historicos", link).then((resolve) =>{
        console.log(resolve);
    });
    eliminarCliente("ligas", link).then((resolve) =>{
        console.log(resolve);
    });
}

/* PETICIÓN PARA ELIMINAR CLIENTE */
const eliminarCliente = (categoria, id) => {
    return fetch(`http://localhost:3000/${categoria}/${id}`, {
      method: "DELETE",
    });
  };
