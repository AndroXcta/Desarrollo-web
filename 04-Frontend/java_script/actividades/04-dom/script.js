//Actividad

// a) Acceso por etiqueta:
// Utiliza JavaScript para acceder a todos los elementos <p> en la página y muestra la colección de elementos en la consola del navegador.

// b) Acceso por clase:
// Utiliza JavaScript para acceder a todos los elementos con la clase "clase1" y muestra la colección de elementos en la consola del navegador.

// c) Acceso por id:
// Utiliza JavaScript para acceder al elemento con el id "id2" y muestra el elemento en la consola del navegador.

// d) Acceso por selector de CSS:
// Utiliza JavaScript para acceder a todos los elementos con la clase "clase1" y al elemento con el id "id2" utilizando un selector de CSS combinado. Muestra la colección de elementos en la consola del navegador.

// Recuerda utilizar la consola del navegador para ver los resultados de cada tarea. ¡Diviértete explorando el acceso al DOM!

const todoP = document.querySelectorAll ("p");
console.log(todoP);

const clases1 = document.querySelectorAll(".clase1");
console.log(clases1);

const id2 = document.querySelector("#id2");
console.log(id2);

const CSS1 = document.querySelectorAll (".clase1-#id2")
console.log (CSS1)
