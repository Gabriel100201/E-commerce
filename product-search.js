import { fetchservices } from "./fetch.js";

const container = document.querySelector(".search-product");

const crearProducto = (nombre, precio, img) => {
    const content = productoHTML(nombre, precio, img);
    const div = document.createElement("div");
    div.classList.add("sections__producto");
    div.innerHTML = content;
    return div;
}
const productoHTML = (nombre, precio, img) => {
    const producto = `
        <img class="producto__img" src="${img}">
        <h3 class="producto__nombre">${nombre}</h3>
        <h3 class="producto__precio">${precio}</h3>
        <a class="producto__link" href="#">
            <h3 class="link__titulo">Ver producto</h3>
        </a>`;
    return producto;
}
const url = new URL(window.location);
const cat = url.searchParams.get("cat");
const id = url.searchParams.get("id");
fetchservices.lista(cat, id)
    .then((data) => {
        const producto = crearProducto(data["nombre"], data["precio"], data["img"]);
        container.appendChild(producto);
    })