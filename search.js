import { fetchservices } from "./fetch.js";

const buscar = (event) => {
    console.log(event.target);
    const searcher = document.querySelector(".searcher__input");
    const value = searcher.value;

    fetchservices.listaMundiales()
    .then((data) => {
        data.forEach((dato) => {
            if ((dato["nombre"].toLowerCase())==(value.toLowerCase())){
                redirect(dato["id"], dato["categoria"]);
            }
        })
    });
    fetchservices.listaHistoricos()
    .then((data) => {
        data.forEach((dato) => {
            if ((dato["nombre"].toLowerCase())==(value.toLowerCase())){
                redirect(dato["id"], dato["categoria"]);
            }
        })
    });
    fetchservices.listaLigas()
    .then((data) => {
        data.forEach((dato) => {
            if ((dato["nombre"].toLowerCase())==(value.toLowerCase())){
                redirect(dato["id"], dato["categoria"]);
            }
        })
    });
}

const buscarSecundario = (event) => {
    console.log(event.target);
    const searcher = document.querySelector(".searcher__input--mobile");
    const value = searcher.value;

    fetchservices.listaMundiales()
    .then((data) => {
        data.forEach((dato) => {
            if ((dato["nombre"].toLowerCase())==(value.toLowerCase())){
                redirect(dato["id"], dato["categoria"]);
            }
        })
    });
    fetchservices.listaHistoricos()
    .then((data) => {
        data.forEach((dato) => {
            if ((dato["nombre"].toLowerCase())==(value.toLowerCase())){
                redirect(dato["id"], dato["categoria"]);
            }
        })
    });
    fetchservices.listaLigas()
    .then((data) => {
        data.forEach((dato) => {
            if ((dato["nombre"].toLowerCase())==(value.toLowerCase())){
                redirect(dato["id"], dato["categoria"]);
            }
        })
    });
}

const redirect = (id, cat) => {
    let urlObtained = window.location;
    urlObtained = urlObtained.href;
    console.log(urlObtained);
    if (urlObtained.includes("index")){
        window.location.href = `screens/search.html?id=${id}&cat=${cat}`
    }
    else{
        window.location.href = `search.html?id=${id}&cat=${cat}`
    }
}
const abrirSearch = () => {
    const buttonSearch = document.querySelector(".searcher__button--mobile");
    const searcherMobile = document.querySelector(".header__searcher-mobile");
    const logo = document.querySelector(".header__logo");
    const login = document.querySelector(".header__login-button");
    const searcherBarra = document.querySelector(".searcher__input--mobile");
    const buttonSearchMobileSearch = document.querySelector(".searcher__button-search--mobile");
    const buttonMenu = document.querySelector(".searcher__menu");
    buttonMenu.addEventListener("click", cerrar)
    buttonSearch.style.display = "none";
    buttonMenu.style.display = "block";
    buttonSearchMobileSearch.style.display = "block";
    searcherBarra.style.display = "inline-block";
    login.style.display = "none";
    logo.style.display = "none";
    searcherMobile.style.width = "85%";
}
const cerrar = () => {
    const buttonSearch = document.querySelector(".searcher__button--mobile");
    const searcherMobile = document.querySelector(".header__searcher-mobile");
    const logo = document.querySelector(".header__logo");
    const login = document.querySelector(".header__login-button");
    const searcherBarra = document.querySelector(".searcher__input--mobile");
    const buttonSearchMobileSearch = document.querySelector(".searcher__button-search--mobile");
    const buttonMenu = document.querySelector(".searcher__menu");
    buttonSearch.style.display = "inline-block";
    buttonMenu.style.display = "none";
    buttonSearchMobileSearch.style.display = "none";
    searcherBarra.style.display = "none";
    login.style.display = "inline-block";
    logo.style.display = "inline-block";
    searcherMobile.style.width = "0%";
}

const buttonSearch = document.querySelector(".searcher__button");
const buttonSearchMobile = document.querySelector(".searcher__button--mobile");
const buscarMobile = document.querySelector(".searcher__button-search--mobile");
buscarMobile.addEventListener("click", buscarSecundario);
buttonSearch.addEventListener("click", buscar);
buttonSearchMobile.addEventListener("click", abrirSearch);
