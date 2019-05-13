const fetch = require("node-fetch");
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemons() {              //async keyword, async always return a promise
    const response = await fetch(apiUrl);   //await keyword, tell the function to wait for the fetch to complete, regardless the call success or failed.
    const json = await response.json();     //this line will not run until the above line is completed due to the await keyword

    console.log(json.results[0]);
}

// function getPokemons() {
//     fetch(apiUrl)
//     .then((r) => r.json())
//     .then((json) => {
//         console.log(json.results[0]);
//     }).catch((error) => {
//         console.log('Failed');
//     });
// }

getPokemons();