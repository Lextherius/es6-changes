const fetch = require("node-fetch");
const apiUrl = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";

function getPokemons() {
    fetch(apiUrl)
    .then((r) => r.json())
    .then((json) => {
        console.log(json.results[0]);
    });
}

getPokemons();