function lllegar() {
  console.log("llegar");
}

function esperar(callback) {
  setTimeout(() => {
    console.log("esperar");
    callback();
  }, 2000);
}

function irse() {
    console.log("irse");
}

lllegar();
esperar(irse);



let hayUnaPersona = true;

function hola(nombre) {
  return new Promise((resolve, reject) => {
    if (hayUnaPersona) {
      setTimeout(() => {
        console.log("Hola");
        resolve(nombre);
      }, 2000);
    } else {
      reject("No se pudo saludar");
    }
  });
}

function hablar() {
  console.log("Bla bla bla bla...");
}

hola("Angelo")
  .then((nombre) => {
    console.log("Hola " + nombre);
  })
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(() => {
    console.log("Adios");
  })
  .catch((error) => {
    console.log(error);
  });