// Default Parameter
// define um valor padrão caso um parâmetro não tenha sido forncido
const assert = require('assert');

const sum = (num1, num2) => num1 + num2;
const sumDP = (num1 = 0, num2 = 0) => num1 + num2;

assert.strictEqual(sum(1, 1), 2);
assert.strictEqual(sumDP(1, 1), 2);
console.log(sum(1, 1), 2);
console.log(sum(1, 1), 2);

assert.strictEqual(sum(1), 1);
assert.strictEqual(sumDP(1), 1);
console.log(sum(1), 1);
console.log(sumDP(1), 1);

assert.strictEqual(sum(2), 2);
assert.strictEqual(sumDP(2), 2);
console.log(sum(2), 2);
console.log(sumDP(2), 2);

assert.strictEqual(sum(), 0);
assert.strictEqual(sumDP(), 0);
console.log(sum(), 0);
console.log(sumDP(), 0);
