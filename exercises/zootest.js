const data = require('./zoodata');
const { species } = require('./zoodata');
const { employees } = require('./zoodata');
const { hours } = require('./zoodata');
const { prices } = require('./zoodata');

const reducer = ((acc, cur) => {
  acc[cur.name] = cur.residents.length;
  return acc;
});

function countAnimals(specie) {
  if (!specie) {
    const animal = species.reduce(reducer, {});
    return animal;
  }
  return species
    .find((animal) => animal.name === specie).residents.length;
}

console.log(countAnimals());
