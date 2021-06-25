// Criar jogo do Bernardo
let bernardoGame = [7, 14, 19, 23, 33, 49]
 
let firstNumber = Math.floor(Math.random() * 60) + 1;
let secondNumber = Math.floor(Math.random() * 60) + 1;
let thirdNumber = Math.floor(Math.random() * 60) + 1;
let forthNumber = Math.floor(Math.random() * 60) + 1;
let fifthNumber = Math.floor(Math.random() * 60) + 1;
let sixthNumber = Math.floor(Math.random() * 60) + 1;

let megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, forthNumber, fifthNumber, sixthNumber]

// console.log(megaSenaNumbers)

/* // Conferência
for (let index = 0; index < bernardoGame.length; index += 1) {
    if ()
    bernardoGame[index] == megaSenaNumbers[0];
    bernardoGame[index] == megaSenaNumbers[1]; 
    bernardoGame[index] == megaSenaNumbers[2]; 
    bernardoGame[index] == megaSenaNumbers[3]; 
    bernardoGame[index] == megaSenaNumbers[4]; 
    bernardoGame[index] == megaSenaNumbers[5]; 
}

for (let j = 0; j < megaSenaNumbers; j += 1)

bernardoGame[index] == megaSenaNumbers[j];
bernardoGame[index] == megaSenaNumbers[j]; 
bernardoGame[index] == megaSenaNumbers[j]; 
bernardoGame[index] == megaSenaNumbers[j]; 
bernardoGame[index] == megaSenaNumbers[j]; 
bernardoGame[index] == megaSenaNumbers[j];  */


// Conferência
let numberOfHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index += 1) {
    let drawNumber = megaSenaNumbers[index];

    for (let gameIndex = 0; gameIndex < bernardoGame.length; gameIndex += 1) {
        let gameNumber = bernardoGame[gameIndex];
        
        if (drawNumber === gameNumber) {
            numberOfHits += 1;
        }
    }
}

console.log('Jogo do Bernardo: ' + bernardoGame)
console.log('Números sorteados: ' + megaSenaNumbers)
console.log('Quantidade de acertos: ' + numberOfHits)