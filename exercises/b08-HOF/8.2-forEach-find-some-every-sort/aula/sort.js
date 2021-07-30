const pizzas = ['Frango com Catupiry', 'Marguerita', 'Gratinada', '4 Queijos']

pizzas.sort((a, b) => {
  
})

console.log(pizzas.sort(ascComparator));
console.log(pizzas.sort(descComparator));

// ordenação crescente: 
function ascComparator(leftHandSide, rightHandSide) {
  if (leftHandSide < rightHandSide) {
    return -1;
  }
  if (leftHandSide > rightHandSide) {
    return +1;
  }
  return 0;
}

function descComparator(leftHandSide, rightHandSide) {
  if (leftHandSide > rightHandSide) {
    return -1;
  }
  if (leftHandSide < rightHandSide) {
    return +1;
  }
  return 0;
}

// Ordenando números:

const numbers = [1,2,3,4,5,6,7,8,9,10]
const scrambledNumbers = [4,6,2,1,9,7,3,10,8,5]

console.log(numbers.sort(ascComparator));
console.log(numbers.sort(descComparator));

console.log ('_____________' )

console.log(scrambledNumbers.sort(ascComparator));
console.log(scrambledNumbers.sort(descComparator));

console.log ('_____________' )

// Quando estivermos ordenando números (e apenas números), podemos fazer:
console.log(numbers.sort((lhs, rhs) => lhs - rhs)); // ordem crescente
console.log(numbers.sort((lhs, rhs) => rhs - lhs)); // ordem decrescente