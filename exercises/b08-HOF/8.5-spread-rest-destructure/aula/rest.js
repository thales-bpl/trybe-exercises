const assert = require('assert');

function sumAll(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}
