// Implementando uma função que recebe um número inteiro e retorna seu somatório.
// Vamos usar método TDD

// Ex: summationOf(3) retorna 6: 1 + 2 + 3 = 6

// passo 1: verificar se a função summationOf existe:
// Vamos propositalmente escrever uma função que falha

const assert = require('assert');

console.log(typeof summationOf === 'funtion');

assert.strictEqual(
  typeof summationOf,
  'function',
  'A função summationOf não existe'
)

// passo 2: montando a função:
const assert = require('assert');

const summationOf = (number) => {
  
}

assert.strictEqual(
  typeof summationOf,
  'function',
  'A função summationOf não existe'
)
// Agora a função passa no nosso primeiro teste, que verifica apenas se summationOF é uma função. Vamos além:
// Reescrevendo testes esperando resultados:
assert.strictEqual(summationOf(1), 1, 'O somatório de 1 deve ser 1');
assert.strictEqual(summationOf(3), 6, 'O somatório de 1 deve ser 6');
assert.strictEqual(summationOf(5), 15, 'O somatório de 1 deve ser 15');
// esses testes vão obviamente retornar erros pois nossa função no momento não faz nada.

// Refatorando a função:
const assert = require('assert');

const summationOf = (number) => {
  let sum = 0;
  for (let index = number; index > 0; index -= 1) {
    sum += index;
  }
  return sum;
}

assert.strictEqual(summationOf(1), 1, 'O somatório de 1 deve ser 1');
assert.strictEqual(summationOf(3), 6, 'O somatório de 3 deve ser 6');
assert.strictEqual(summationOf(5), 15, 'O somatório de 5 deve ser 15');
assert.strictEqual(summationOf(0), 0, 'O somatório de 5 deve ser 0');

// E agora sim nossos testes passam!

// Em um cenário onde o teste não vai passar, como por exemplo usando um string como parâmetro, devemos declarar uma exceção (erro) para que nosso código não dê erro 
const assert = require('assert');

const summationOf = (number) => {
  if (typeof number !== 'number') {
    throw new Error('O tipo do parâmetro number tem que ser numérico')
  }

  return (number * (number +1)) / 2;
}

// Teste unitário para o Throw
assert.throws(() => {
    summationOf('3')
}, 'summationOf não deve receber strings');
assert.strictEqual(summationOf(1), 1, 'O somatório de 1 deve ser 1');
assert.strictEqual(summationOf(3), 6, 'O somatório de 3 deve ser 6');
assert.strictEqual(summationOf(5), 15, 'O somatório de 5 deve ser 15');
assert.strictEqual(summationOf(0), 0, 'O somatório de 5 deve ser 0');
// Dessa forma não teremos erro

