/*const numeros = [5, 2, 1, 9, 8, 4, 7]
let ayuda = numeros [3]


for (let i = 0; i < numeros.length; i++) {
    if (ayuda <= numeros[i]) {
        console.log ("el numero mayor es", numeros [i])
    }

    
}


const numeros = [5, 7, 10, 4, 8, 9, 10, 15, 20, 3];
let ayuda = numeros[0];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > ayuda) {
    ayuda = numeros[i];
  }

}

console.log('El número mayor es:', ayuda);

*/

function numeroMayor(array) {
  if (!Array.isArray(array)) {
    console.log("Solo se admiten numeros");
    return;
  }
  if (array.some(isNaN)) {
    console.log("Solo se admiten números");
    return;
  }

  let ayuda = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > ayuda) {
      ayuda = array[i];
    }
  }
  console.log("El número mayor es:", ayuda);
}

function numeroMenor(array) {
  let ayuda = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < ayuda) {
      ayuda = array[i];
    }
  }
  console.log("El número menor es:", ayuda);
}
