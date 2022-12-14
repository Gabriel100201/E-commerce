import { fetchservices } from "./fetch.js";

const productoHTML = (nombre, precio, img, id, cat) => {
const product = `
        <div class="product__filtro">
            <a class="filtro__link filtro__link-trash" id="${id}"><i id="${cat}" class="fa-solid fa-trash filtro__ico"></i></a>                
            <a class="filtro__link filtro__link-pencil" id="${id}" href="edit.html?id=${id}&cat=${cat}"><i class="fa-solid fa-pencil filtro__ico"></i></a>
        </div>
        <img class="producto__img" src="${img}">
        <h3 class="producto__nombre">${nombre}</h3>
        <h3 class="producto__precio">${precio}</h3>
        </a>`
    return product;
}

const crearProducto = (nombre, precio, img, id, cat) => {
    const content = productoHTML(nombre, precio, img, id, cat);
    const div = document.createElement("div");
    div.classList.add("sections__producto");
    div.classList.add("product");
    div.innerHTML = content;
    return div;
}

fetchservices.listaMundiales()
    .then((data) => {
    data.forEach((datos) => {
        const nuevoDiv = crearProducto(datos["nombre"], datos["precio"], datos["img"], datos["id"], datos["categoria"]);
        const container = document.querySelector(".product-todos");
        container.appendChild(nuevoDiv);
    })
});
fetchservices.listaHistoricos()
    .then((data) => {
    data.forEach((datos) => {
        const nuevoDiv = crearProducto(datos["nombre"], datos["precio"], datos["img"], datos["id"], datos["categoria"]);
        const container = document.querySelector(".product-todos");
        container.appendChild(nuevoDiv);
    })
});
fetchservices.listaLigas()
    .then((data) => {
    data.forEach((datos) => {
        const nuevoDiv = crearProducto(datos["nombre"], datos["precio"], datos["img"], datos["id"], datos["categoria"]);
        const container = document.querySelector(".product-todos");
        container.appendChild(nuevoDiv);
    })
});