const arrayN = [1,2,-2,3,4,5,6,-6,0]

console.table(arrayN);

// fazendo o .reduce():

const reducer = (accumulator, currentValue, index) => {
  console.log(`_________________`);
  console.log(`accumulator = ${accumulator}`);
  console.log(`current value = ${currentValue}`);
  console.log(`index = ${index}`);
  return accumulator + currentValue;
};

const summation = arrayN.reduce(reducer, 0);

console.log(`O somatório é ${summation}`);
