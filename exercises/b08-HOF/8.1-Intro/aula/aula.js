// Crie uma função que:

// 1. Dado um 'número'
// 2. Dada uma 'função'

// Execute a 'função' a quantidade de vezes dada pelo parâmetro 'número'

const repeat = (number, callback) => {
  for (let index = number; index > 0; index -= 1) {
    callback(index);
  }
}

repeat(3, (number) => {console.log(`O foguete da 14b está decolando em ${number}...`);});


const number = [1000, 2000, 3000, 4000]
repeat(number.length, (index) => {
  console.log(number[index]);
});
