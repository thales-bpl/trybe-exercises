const assert = require('assert');

const formatDate = (year, month, day) => {
  return `${day}/${month}/${year}`;
}

assert.strictEqual(
  formatDate('1991'), 'undefined/undefined/1991',
);
assert.strictEqual(
  formatDate('1981', '7', '31', '22', '47', '12'), '31/7/1981',
);
assert.strictEqual(
  formatDate(...['1981', '7', '31', '22', '47', '12']), '31/7/1981',
);
