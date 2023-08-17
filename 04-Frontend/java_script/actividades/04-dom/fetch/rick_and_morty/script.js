const url = "https://rickandmortyapi.com/api/character";
const comentarios = document.querySelector(".all");

function mostrarComentario(data) {
    const div =document.createElement ("div")
    const nombre = document.createElement("h2");
    const id = document.createElement("h3");
    const specie = document.createElement("p");
    const stado = document.createElement("p");
    const imagen = document.createElement("img");
    div.className="personaje"

  imagen.src = data.image;
  stado.textContent = data.status;
  id.textContent = data.id;
  nombre.textContent = data.name;
  specie.textContent = data.species;

  div.append(nombre, id, specie, stado, imagen);
  comentarios.append (div)
}

fetch(url)
  .then((respuesta) => respuesta.json())
  .then((data) => {
    data.results.forEach((comentario) => {
      mostrarComentario(comentario);
    });
  })
  .catch((error) => {
    console.log(error);
  });
