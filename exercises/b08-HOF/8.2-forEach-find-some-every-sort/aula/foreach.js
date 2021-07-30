const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function callbackfn(number, index, array) {
  console.log(`status do número: [${index}] ${number}`);
  /* console.log(array) */
}

numbers.forEach(callbackfn);

numbers.forEach((number, index) => console.log(`status do número: [${index}] ${number}`))

// Como forEach funciona por dentro?
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function howAForEachWorks(array, block) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    block(element, index, array);
  }
}

howAForEachWorks(numbers, (valor) => console.log(valor))
howAForEachWorks(numbers, (valor, index) => console.log(`valor[${index}] = ${valor}`))
