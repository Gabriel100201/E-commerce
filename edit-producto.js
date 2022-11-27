const esperar = () => {
    return fetch("http://localhost:3000/mundiales").then((respuesta) => respuesta.json());
}
esperar().then(() => {
    edit();
});

const edit = () => {
    const pencil = document.querySelectorAll(".filtro__link-pencil");
    pencil.forEach((ico) => {
        ico.addEventListener("click", editClient);
    });
}

const editClient = (event) =>{
    let editId = event.target; 
    editId = editId.parentElement;
    editId = editId.id;
    console.log(editId);
}