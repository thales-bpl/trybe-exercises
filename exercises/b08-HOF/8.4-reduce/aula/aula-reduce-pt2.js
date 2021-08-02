// A lógica do .reducer() somos nós que escrevemos:
const arrayN = [1,2,-2,3,4,5,6,-6,0]

console.table(arrayN);

const reducer = (accumulator, currentValue) => {
  console.log(`_________________`);
  console.log(`accumulator = ${accumulator}`);
  console.log(`accumulator = ${currentValue}`);

  if (accumulator > currentValue) {
    return accumulator;
  }
  return currentValue;
};

const higherNumber = arrayN.reduce(reducer);

console.log(`O maior número do array é ${higherNumber}`);
