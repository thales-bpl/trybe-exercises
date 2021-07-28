// A programming language has First-Class Functions if it treat its functions as first class citizens (that is: their functions supports all the operation generally available to other entities).
// That allows for using functions as variable and/or parameters.

const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));

const calc = (number) => {
  return amount + number;
}