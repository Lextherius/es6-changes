function addressMaker(address)
{
    const {city, state} = address;                                                  //1. object destructuring
    const newAddress = {
        city,                                                                       //2. object literal
        state,                                                                      //2. object literal
        country: 'United States'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);  //3. string/template literal
}

addressMaker({city:'Austin', state:'Texas', });