// const url = "https://jsonplaceholder.typicod.com/comments/1";
// fetch(url)
//     .then((responsive) => responsive.json())
//     .then((data)=> console.log(data))
//     .catch((error) => console.log(error))


const url = "https://jsonplaceholder.typicod.com/comments/1";
fetch(url)
    .then((responsive) => responsive.json())
    .then((data)=> {console.log(data)})
    .catch((error) => console.log(error))

