// SOME
// Retorna true se pelo menos 1 dos elementos cumprir a condição estabelecida
// Retorna false se nenhum elemento cumprir a condição
// Syntax: (valor, index, array)
// retorna obrigatoriamente um boolean

const ages = [23, 32, 17, 16, 34];
const moreAges = [23, 32, 34]

const condicao = (valor) => {
  return valor < 18;
}

console.log(
  'Alguma idade menor que 18 no array ages?',
  ages.some(condicao)
)

console.log(
  'Alguma idade menor que 18 no array moreAges?',
  moreAges.some(condicao)
)

// Como a função some opera por dentro?
const ages = [23, 32, 17, 16, 34];
const mySome = (array, callbackfn) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callbackfn(element, index, array)) {
      return true;
    }
  }
  return false;
}

const temAlgumValorMenorQue18 = mySome(ages, (age) => {
  return age < 18;
});

console.log(
  `Alguma idade menos que 18 no array ages? ${temAlgumValorMenorQue18}`
);
