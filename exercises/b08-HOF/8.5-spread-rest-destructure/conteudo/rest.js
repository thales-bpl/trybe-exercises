// ----- rest ----- //
// Rest syntax looks exactly like spread syntax. In a way, rest syntax is the opposite of spread syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

// Syntax: ...testArray

// Example1:
function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// Example2:
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // output: 88
console.log(sum(1, 2, 3, 4, 5)); // output: 15
console.log(sum(1, 2 , 3)); // output: 6

