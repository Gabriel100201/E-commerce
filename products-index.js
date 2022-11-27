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

const crearProducto = (nombre, precio, img) => {
    const content = productoHTML(nombre, precio, img);
    const div = document.createElement("div");
    div.classList.add("sections__producto");
    div.innerHTML = content;
    return div;
}

const listaMundiales = () => {
    return fetch("http://localhost:3000/mundiales").then((response) => response.json());
}
const listaHistoricos = () => {
    return fetch("http://localhost:3000/historicos").then((response) => response.json());
}
const listaLigas = () => {
    return fetch("http://localhost:3000/ligas").then((response) => response.json());
}


listaMundiales()
    .then((data) => {
    data.forEach((datos) => {
        const nuevoDiv = crearProducto(datos["nombre"], datos["precio"], datos["imagen"]);
        const container = document.querySelector(".sections__products-container");
        container.appendChild(nuevoDiv);
    })
});
listaHistoricos()
    .then((data) => {
    data.forEach((datos) => {
        const nuevoDiv = crearProducto(datos["nombre"], datos["precio"], datos["imagen"]);
        const container = document.querySelector(".sections__products-container-2");
        container.appendChild(nuevoDiv);
    })
});
listaLigas()
    .then((data) => {
    data.forEach((datos) => {
        const nuevoDiv = crearProducto(datos["nombre"], datos["precio"], datos["imagen"]);
        const container = document.querySelector(".sections__products-container-3");
        container.appendChild(nuevoDiv);
    })
});