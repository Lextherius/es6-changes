const fetch = require('node-fetch');

async function fetchStarshipsOwned(peopleId) {
    const response = await fetch(`https://swapi.co/api/people/${peopleId}/`);
    const people = await response.json();

    const ships = [];
    for(const shipLink of people.starships)
    {
        const response = await fetch(shipLink);
        const ship = await response.json();
        ships.push(ship.name);
    }
    
    return ships;

    // return fetch(`https://swapi.co/api/people/${peopleId}/`)
    // .then(response => response.json())
    // .then(people => {
    //     const promises = people.starships.map(url => {
    //         fetch(url)
    //         .then(response => response.json())
    //         .then(starship => starship.name);
    //     });
    //     return Promise.all(promises);
    // });
}

const result = fetchStarshipsOwned(1);
console.log(result);