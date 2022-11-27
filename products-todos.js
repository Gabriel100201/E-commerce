const productoHTML = (nombre, precio, img, id) => {
const product = `
        <div class="product__filtro">
            <a class="filtro__link filtro__link-trash" id="${nombre}"><i class="fa-solid fa-trash filtro__ico"></i></a>                
            <a class="filtro__link" href="#"><i class="fa-solid fa-pencil filtro__ico"></i></a>
        </div>
        <img class="producto__img" src="${img}">
        <h3 class="producto__nombre">${nombre}</h3>
        <h3 class="producto__precio">${precio}</h3>
        </a>`
    return product;
}

const crearProducto = (nombre, precio, img, id) => {
    const content = productoHTML(nombre, precio, img, id);
    const div = document.createElement("div");
    div.classList.add("sections__producto");
    div.classList.add("product");
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
        const nuevoDiv = crearProducto(datos["nombre"], datos["precio"], datos["imagen"], datos["nombre"]);
        const container = document.querySelector(".product-todos");
        container.appendChild(nuevoDiv);
    })
});
listaHistoricos()
    .then((data) => {
    data.forEach((datos) => {
        const nuevoDiv = crearProducto(datos["nombre"], datos["precio"], datos["imagen"], datos["nombre"]);
        const container = document.querySelector(".product-todos");
        container.appendChild(nuevoDiv);
    })
});
listaLigas()
    .then((data) => {
    data.forEach((datos) => {
        const nuevoDiv = crearProducto(datos["nombre"], datos["precio"], datos["imagen"], datos["nombre"]);
        const container = document.querySelector(".product-todos");
        container.appendChild(nuevoDiv);
    })
});