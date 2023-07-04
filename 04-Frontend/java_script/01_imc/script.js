// const lets = document.getElementById("lets")

// lets.addEventListener("click", function(){
//     let peso = prompt ("cuanto pesas?");
//     let altura = prompt ("cuanto mide?");

// })

let peso = prompt("cuanto pesas?");
let altura = prompt("cuanto mide?");
let resultado = peso / altura / altura;

if (resultado < 13.5) {
  alert("tas medio flaco weon");
} else if (resultado < 25) {
  alert("tas bien de peso bro");
} else if (resultado < 30) {
  alert("tas rellenito de amor");
} else if (resultado < 35) {
  alert("tas medio gordo");
} else if (resultado > 35) {
  alert("tas bien bro?");
} else if ((resultado = "string")) {
  alert("amigo, eres gay?");
} else {
  alert("amigo, eres gay?");
}
