<h1 class="titulo">Los Gatos</h1>
      <p class="descripcion">
        Los gatos son animales domésticos que se caracterizan por su elegancia,
        agilidad y carácter independiente. Son mascotas muy populares en todo el
        mundo.
      </p>
      <img
        class="imagen-gato"
        src="https://http.cat/images/200.jpg"
        alt="Gato"
      />
      <h2 class="titulo">Razas de Gatos</h2>
      <ul class="razas-gatos">
        <li class="descripcion">Persa</li>
        <li class="descripcion">Siames</li>
        <li class="descripcion">Maine Coon</li>
        <li class="descripcion">Bengalí</li>
      </ul>
//obtener elemento padre
// const parrafo= document.querySelector ("#app")
// //crear variable y crear una etiqueta "p"
// const gatos = document.createElement ("p")
// //agregar una descripcion a la etiqueta y se asigna a ese etiqueta p antes creada
// parrafo.textContent= "descripcion"
// //agrega el elemento creado a un lugar especifico del documento html
// gatos.insertAdjacentElement("beforebegin", parrafo )

const parrafo = document.querySelector ("#app")
const gatos = document.createElement ("p")
gatos.textContent= `Los gatos son animales domésticos que se caracterizan por su elegancia,
agilidad y carácter independiente. Son mascotas muy populares en todo el
mundo.`
parrafo.insertAdjacentElement("afterbegin", gatos) 
gatos.className = "descripcion"

const imagen = document.createComment ("img")
imagen.className = "imagen-gato"
imagen.src = "https://http.cat/images/200.jpg"

