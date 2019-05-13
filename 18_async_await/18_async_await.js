const fetch = require("node-fetch");
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

function getPokemons() {
    fetch(apiUrl)
    .then((r) => r.json())
    .then((json) => {
        console.log(json.results[0]);
    }).catch((error) => {
        console.log('Failed');
    });
}

getPokemons();