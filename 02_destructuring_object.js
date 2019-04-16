const personalInformation = {
    firstName : 'Howson',
    lastName : 'Lex',
    city : 'San Franciso',
    state : 'California',
    zipcode : 1234567
}

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);