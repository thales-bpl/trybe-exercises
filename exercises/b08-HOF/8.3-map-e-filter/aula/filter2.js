const names = ['Amanda', 'Alcione', 'Lucia', 'Carlos', 'José', 'Maria']

console.table(names)

console.log('As pessoas cujo nome começa coma letra A são:')

const mustBeInclusded = (param1) => param1[0].startsWith('A');
/* const mustBeInclusded = (param1) => param1[0].toUpperCase() === 'A'; */

const filteredNames = names.filter(mustBeInclusded);

console.table(filteredNames);
