// ----- Array Destructuring ----- //
// Podemos desestruturar arrays da mesma forma que objetos

// Sem array destructuring:
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// Com array destructuring:
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;
// Estamos atribuindo uma key a cada objeto do array

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada
