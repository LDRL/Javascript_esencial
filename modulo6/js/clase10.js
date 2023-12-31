const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

const opts = { crossDomain: true };

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Sucedio un error al obtener el personaje ${id}`);
}

let ids = [1, 2, 3, 4, 5, 6, 7];

let promesas = ids.map((id) => obtenerPersonaje(id));
Promise.all(promesas)
  .then((personajes) => console.log(personajes))
  .catch(onError);
