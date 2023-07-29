const boton = document.querySelector("#btn");
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const Imc = document.createElement("p");
const contenedor = document.querySelector("#Etiqueta");
contenedor.appendChild(Imc);

function calcular() {
  if (peso.value === "" || altura.value=== "")  {
    alert("debes completar todos los datos que se piden");
    return;
  }
  if (peso.value== 0 || altura.value== 0){
    alert("los numeros deben ser mayores a 0")
    return
  }
  let resultado = peso.value / (altura.value * altura.value);
  if (resultado < 18.5) {
    Imc.textContent = `${resultado} estas bajo de peso`;
  } else if (18.5 <= resultado) {
    Imc.textContent = `${resultado} estas bien de peso`;
  } else if (25 <= resultado) {
    Imc.textContent = `${resultado} tienes sobre peso`;
  } else {
    Imc.textContent = `${resultado} tienes sobre peso`;
  }
}
boton.addEventListener("click", calcular);
