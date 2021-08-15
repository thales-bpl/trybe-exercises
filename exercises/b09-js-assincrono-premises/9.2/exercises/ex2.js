const dividerArray = [2, 3, 5, 10];

const promise = new Promise((resolve, reject) => {
  let randomArray = [];
  for(let index = 0; index < 10; index += 1) {
    randomArray.push(Math.floor(Math.random()*51));
  }
  
  summedValuesOfScaledArray = randomArray
    .map((number) => number * number)
    .reduce(((acc, cur) => acc + cur), 0);

  (summedValuesOfScaledArray < 8000)
    ? resolve (summedValuesOfScaledArray)
    : reject (summedValuesOfScaledArray)
})
.then((arraySum) => dividerArray.map((value) => arraySum / value))
.then((result) => console.log(result))
.catch(arraySum => console.log(`Promise rejeitada. A Soma foi: ${arraySum}`))




