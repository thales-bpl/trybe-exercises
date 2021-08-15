/* ESCOPOS: 3 tipos de escopo
1. Global
2. Escopo de Função
3. Escopo de Bloco */

/* Escopos de Bloco podem estar ou não dentro de uma função. */

/* Var tem o comportamento de 'Hoisting' (Içamento).
A palavra chave 'function' também faz Hoisting. */

function greetings(name) {

  if (name.includes('14')) {
    var message = `Olá ${name}! Vamos pra cima, sempre :rocket:`;
    console.log(message);
  } else {
    let message = `Olá ${name}! :)`;
    console.log(message);
  }
  console.log(message)
}

greetings('turma 14, Tribo B')

/* ARROW FUNCTION
Transformando uma função em arrow function:
  (name) => {
    'olá ' + name
  } */

/* Se a função tiver apenas uma linha, podemos fazer:
(name) => 'Olá ' + name; */

/* Se a função tiver apenas um parâmetro, podemos remover os parênteses:
name => 'Olá ' + name; */

