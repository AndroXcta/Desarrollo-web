// const numeros = [5, 7, 10, 4, 8, 9, 10];
// let sumador = 0;

// for (let i = 0; i < numeros.length; index++) {
//   console.log(sumador + numeros[i]);
// }

// for (let i = 0; i < numeros.length; i++) {
//   sumador += numeros[i];
//   console.log(sumador);
// }

// let par = 0;
// let impar = 0;
// let parametros = [2, 6, 8, 3, 5, 7, 9, 1];

// function parImpar(parametros) {
//   for (let i = 0; i < parametros.length; i++) {
//     par = parametros[i];
//     impar = parametros[i];
//     if (i ) {
//     }
//     console.log(par + parametros[i]);
//   }
// }

function parImpar(array) {
  let par = 0;
  let impar = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      par++;
    } else {
      impar++;
    }
  }
  console.log("Pares: " + par);
  console.log("Impares: " + impar);
}

parImpar([10, 1, 7]);
