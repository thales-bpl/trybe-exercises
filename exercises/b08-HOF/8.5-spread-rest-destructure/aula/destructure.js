const assert = require('assert');

const lion = {
  name: 'Panthera Lion',
  commonName: '',
  weightRange: {
    min: '',
    max: '',
  }
}

const blueWhale = {
  name: '',
  commonName: '',
  weightRange: {
    min: '',
    max: '',
    measurementUnit: 't',
  }
};

const polarBear = {
  name: 'Ursus maritimus',
  commonName: 'Polar Bear',
  weightRange: {
    min: '350',
    max: '700',
  }
}

function animalDescription({ weightRange: { min, max, measurementUnit = 'kg'}, name, commonName }) {
  return `${animal.commonName} (${animal.name}) weighs around ${animal.weightRange.min} - ${animal.weightRange.max}`
}

assert.strictEqual(
  animalDescription(lion),
  `Lion (Panthera Leo) weights around 186.55-225kg`,
);
