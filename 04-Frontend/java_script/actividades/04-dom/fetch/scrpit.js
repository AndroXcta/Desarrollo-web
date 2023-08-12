// const url = "https://jsonplaceholder.typicode.com/comments/1";
// fetch(url)
// .then((response) => {
//   if (!response.ok) throw new Error("No existe este recurso");
//   return response.json();
// })
// .then((data) => {
//   const usuarios = document.querySelector(".users");
//     data.forEach(() => {
//       const nuevo = document.createElement("h2");
//       nuevo.textContent = data.name;
//       const email = document.createElement("p");
//       email.textContent = data.email;
//       const cuerpo = document.createElement("p");
//       cuerpo.textContent = data.body;
//       usuarios.appendChild(nuevo);
//       usuarios.appendChild(email);
//       usuarios.appendChild(cuerpo);
//     });
//     data.length;
//   });

  const url = "https://jsonplaceholder.typicode.com/comments/1";
  fetch(url)
  .then ((response)=> response.json)
  .then(response => {
    if (!response.ok) throw new Error("No existe este recurso");
    return response.json();
  })
  .then((data) => {
    data.forEach((comentario) => {
      mostrarComentario(comentario);
    });
  })
  .catch(error => console.log(error));
  
  function mostrarPersonaje (comment) { 
  const usuarios = document.querySelector(".users");
  const nuevo = document.createElement("div");
  const name = document.createElement("h2");
  name.textContent = comment.name;
  const email = document.createElement("p");
  email.textContent = comment.email;
  const cuerpo = document.createElement("p");
  cuerpo.textContent = comment.body;
  
  nuevo.append(name, email, cuerpo);
  usuarios.appendChild(nuevo);
}
  /*
  fetch(url)
  .then((respuesta) => respuesta.json())
  .then((data) => {
    data.forEach((comentario) => {
      mostrarComentario(comentario);
    });
  })
  .catch((error) => {
    console.log(error);
  });

*/




  // .then((data) => {
  //   const usuarios = document.querySelector(".users");
  //   const nuevo = document.createElement("h2");
  //   nuevo.textContent = data.name;
  //   const email = document.createElement("p");
  //   email.textContent = data.email;
  //   const cuerpo = document.createElement("p");
  //   cuerpo.textContent = data.body;
  //   usuarios.appendChild(nuevo);
  //   usuarios.appendChild(email);
  //   usuarios.appendChild(cuerpo);
  // })
  // .catch((error) => {
  //   document.querySelector("p").textContent = error
  // });




