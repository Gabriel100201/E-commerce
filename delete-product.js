const espera = () => {
    return fetch("http://localhost:3000/mundiales").then((respuesta) => respuesta.json());
}
espera().then(() => {
    eliminar();
    console.log("espera lista");
})

const eliminar = () => {
    const trash = document.querySelectorAll(".filtro__link-trash");
    console.log(trash);
    trash.forEach((ico) => {
        ico.addEventListener("click", eliminarClient);
    });
}

function eliminarClient(event){
    const icoId = event.target;
    let link = icoId.parentElement;
    link = link.id;
    console.log(link);
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

const eliminarCliente = (categoria, id) => {
    return fetch(`http://localhost:3000/${categoria}/${id}`, {
      method: "DELETE",
    });
  };
