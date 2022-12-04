const obtenerInformacion = (data) => {
    const img = document.querySelector("#input-img");
    const nam = document.querySelector(".form__input-nam");
    const pri = document.querySelector(".form__input-pri");
    nam.value = data["nombre"];
    pri.value = data["precio"];
    img.value = data["img"];
};

const url = new URL(window.location);
const id = url.searchParams.get("id");
const obtenerCat1 = () =>{
    return fetch(`http://localhost:3000/mundiales/${id}`).then((respuesta) => respuesta.json());
}
const obtenerCat2 = () =>{
    return fetch(`http://localhost:3000/historicos/${id}`).then((respuesta) => respuesta.json());
}
const obtenerCat3 = () =>{
    return fetch(`http://localhost:3000/ligas/${id}`).then((respuesta) => respuesta.json());
}
obtenerCat1().then((data) =>{
    if (data["id"]){
        obtenerInformacion(data, "mundiales");
    } 
});
obtenerCat2().then((data) =>{
    if (data["id"]){
        obtenerInformacion(data, "historicos")
    } 
});
obtenerCat3().then((data) =>{
    if (data["id"]){
        obtenerInformacion(data, "ligas")
    } 
});