const assert = require('assert');

const point = [1.0, 2.2];
const otherPoint = [0.1, 3.5, -99.6, 77.81, 34];

const printPointCoordinates = (x, y, z = 0) =>
  `Point Coordinates are x = ${x}, y = ${y} and z = ${z}`;

assert.strictEqual(printPointCoordinates(...point, -6.6),
`Point Coordinates are x = 1, y = 2.2 and z = -6.6`);

assert.strictEqual(printPointCoordinates(...point),
`Point Coordinates are x = 1, y = 2.2 and z = 0`);

assert.strictEqual(printPointCoordinates(...otherPoint),
`Point Coordinates are x = 0.1, y = 3.5 and z = -99.6`);

