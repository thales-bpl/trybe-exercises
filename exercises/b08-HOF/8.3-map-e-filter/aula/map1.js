// Como o Map funciona por dentro:
const myMap = (array, mapper) => {
  const accumulator = [];

  array.forEach((element) => {
    const mappedItem = mapper(element, index, originalArray);
    accumulator.push(mappedItem);
  });

  return accumulator;
}

const arrayN = [1,2,-2,3,4,5,6,-6,0]

const mult2 = ((valor) => valor * 2)
console.log(arrayN.map(mult2));

const negativator = ((valor) => valor * (-1));
console.log(arrayN.map(negativator));
