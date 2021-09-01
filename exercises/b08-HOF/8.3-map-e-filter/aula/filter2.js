const names = ['Amanda', 'Alcione', 'Lucia', 'Carlos', 'José', 'Maria']

console.table(names)

console.log('As pessoas cujo nome começa coma letra A são:')

const mustBeIncluded = (param1) => param1[0].startsWith('A');
/* const mustBeInclusded = (param1) => param1[0].toUpperCase() === 'A'; */

const filteredNames = names.filter(mustBeIncluded);

console.table(filteredNames);

let arrayN = [1,2,3,4,5,6]

let test = arrayN.filter((item) => item !== 1);

console.log(test);