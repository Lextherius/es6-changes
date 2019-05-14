const fetch = require('node-fetch');

function fetchStarshipsOwned(peopleId) {
    return fetch(`https://swapi.co/api/people/${peopleId}/`)
    .then(response => response.json())
    .then(people => {
        const promises = people.starships.map(url => {
            fetch(url)
            .then(response => response.json())
            .then(starship => starship.name);
        });
        return Promise.all(promises);
    });
}

const result = fetchStarshipsOwned(1);
console.log(result);