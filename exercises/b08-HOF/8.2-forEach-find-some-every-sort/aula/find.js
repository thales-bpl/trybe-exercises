// -- FIND -- //
// Encontra o primeiro elemento em um array que cumpre uma condição
// Deve retornar true ou false 

const users = [
  {firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  {firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  {firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  {firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  {firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];
/* users.find((valor, indice, array) => {
  // return true / false 
  
});  */

const firstnotDriver = users.find((user) => user.isDriver);

console.log('A primeira pessoa que não é motorista é:', firstnotDriver)


// A primeira pessoa cujo nome é Maggie
/* console.log(users.find((value) => value.firstName === 'Maggie')); */
const test = users.find((value) => value.firstName === 'Maggie');
console.log(test.firstName)
