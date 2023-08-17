const boton = document.querySelector("#btnEstudiante");
const inputEstudiante = document.querySelector("#estudiante");











function agregar () {
    const lista = document.querySelector("ul")
    const li = document.createElement("li")
    li.textContent = inputEstudiante.value;
    lista.appendChild(li)
if (lista === inputEstudiante.value) {
    alert ("usuario ya registrado")
}}

boton.addEventListener("click", agregar)
