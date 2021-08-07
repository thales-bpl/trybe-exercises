// -- EVERY -- //
// Retorna true se todos os valores do vetor cumprirem a condição
// Retorna false se algum valor do array não cumprir a condição

const ages = [23, 32, 17, 16, 34];
const moreAges = [23, 32, 34]

ages.every ((valor, index, array) => {

});

const todasAsPessoasMaioresDeIdade = ages.every((valor) => {
  return valor >= 18;
})

console.log(
  'Todas as pessoas em ages são maiores de idade?',
  todasAsPessoasMaioresDeIdade
);

console.log(
  'Todas as pessoas em moreAges são maiores de idade?',
  moreAges.every((value) => value >= 18)
);