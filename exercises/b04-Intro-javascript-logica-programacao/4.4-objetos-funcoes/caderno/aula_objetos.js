let person = {
    name: 'Levi',
    lastName: 'Manoel',
    canDrive: false,
    age: 18,
    favoriteMovies: ['Star Wars', 'Batman'],
    favoriteNumbers: [3, 7],
    address: {
        street: 'Rua XYZ',
        number: 123,
        city: 'Belo Jardim',
    }
}
// notação de ponto
// console.log(person.name)

// Notação de colchetes (bracket notation)
//console.log(person['lastName'])

//let someProperty = 'favoriteMovies'
//console.log(person[someProperty])

person.favoriteAlbums = ['Let it be', 'Abbey Road'];
person['favoriteColor'] = 'Azul'

for (let key in person) {
    // console.log(key);
    console.log(person[key])
}

///// PORQUE ISSO NÃO FUNCIONA ??  /////
for (let key2 in person) {
    console.log(person.key2)
}

/* let addressProperty = 'address'
let michaelProperty = 'street'
console.log(person[addressProperty][michaelProperty])
console.log(person['address']['street'])
console.log(person['favoriteMovies'].length) */
