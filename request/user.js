
//ver informacion por consola
// async function getPeople() {
    //     //hacer una peticion
//     await fetch('https://randomuser.me/api/').then(response=>response.json()).then(data=>console.log(data.results[0].email));
// }

let people = document.getElementById('person')
//ver informacion por la interfaz del navegador
async function getPeople() {
    //hacer una peticion
    await fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => showPeople(data.results[0]));
}
function showPeople(person) {
    console.log(person);
    people.innerHTML += '<h1>' +person.name.first+ '</h1>';
}

// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });