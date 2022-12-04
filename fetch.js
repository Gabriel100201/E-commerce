const lista = (cat, id) => {
  return fetch(`http://localhost:3000/${cat}/${id}`).then((response) => response.json());
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
const insertProduct = (categoria ,nombre, precio, img) => {
    return fetch(`http://localhost:3000/${categoria}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, precio, img, id: uuid.v4(), categoria}),
    });
};
const eliminarCliente = (categoria, id) => {
    return fetch(`http://localhost:3000/${categoria}/${id}`, {
      method: "DELETE",
    }).catch((err) =>{
      console.log(err);
    })
};
const actualizarProduct = (precio, nombre, id, img, categoria) => {
  return fetch(`http://localhost:3000/${categoria}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, nombre, precio, img, categoria }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};
const actualizarHistoricos = (precio, nombre, id, img) => {
  return fetch(`http://localhost:3000/historicos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, nombre, precio, img }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};
const actualizarLigas = (precio, nombre, id, img) => {
  return fetch(`http://localhost:3000/ligas/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, nombre, precio, img }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const fetchservices = {
    listaMundiales,
    listaHistoricos,
    listaLigas,
    insertProduct,
    eliminarCliente,
    actualizarHistoricos,
    actualizarLigas,
    actualizarProduct,
    lista
}
