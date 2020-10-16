//URL de la API
const API = "https://rickandmortyapi.com/api/character";

// Obtener resultado de API
const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      llenarDatos(json), paginacion(json.info);
    })
    .catch((error) => {
      console.log("Error :", error);
    });
};

const llenarDatos = (data) => {
  let html = "";
  data.results.forEach((pj) => {
    html += '<div class="col mt-5">';
    html += '<div class="card" style="width: 10rem;">';
    html += `<img src="${pj.image}" class="card-img-top" alt="...">`;
    html += '<div class="card-body">';
    html += `<h5 class = "card-title" >${pj.name}</h5>`;
    html += `<p class="card-text">${pj.species}</p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("datosPersonajes").innerHTML = html;
};

// Paginacion
const paginacion = (info) => {
  let prevDisabled = "";
  let nextDisabled = "";

  if (info.prev == null) {
    prevDisabled = "disabled";
  } else {
    prevDisabled = "";
  }

  if (info.next == null) {
    nextDisabled = "disabled";
  } else {
    nextDisabled = "";
  }

  let html = "";
  html += `<li class="page-item ${prevDisabled}"><a class="page-link" onclick="getData('${info.prev}')">Previous</a></li>`;
  html += `<li class="page-item ${nextDisabled}"><a class="page-link" onclick="getData('${info.next}')">Next</a></li>`;
  document.getElementById("paginacion").innerHTML = html;
};

//EjecutargetData
getData(API);