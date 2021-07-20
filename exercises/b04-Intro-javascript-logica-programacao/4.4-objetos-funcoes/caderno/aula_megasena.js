// 1. Gerar um número aleatório
function generateRandomNumber() {
    return Math.floor(Math.random() * 60) + 1;
}

// 2. Gerar um jogo (sortear os números)
// Precisamos sortear SEIS números
function generateGame () {
    let megaSenaDraw = [];
    for (let index = 0; index < 6; index += 1) {
        let randomNumber = generateRandomNumber();
        megaSenaDraw.push(randomNumber);
    }
    return megaSenaDraw;
}

// 3. Conferir quantos acertar um jogo da Mega Sena teve
// Você precisa do seu jogo
// Você precisa do resultado
// Contar quantos acertos

// Conferência:
function checkMegaSenaResult(result, game) {
    let numberOfHits = 0;
    for (let index = 0; index < result.length; index += 1) {
        let drawNumber = result[index];
        for (let gameIndex = 0; gameIndex < game.length; gameIndex += 1) {
            let gameNumber = game[gameIndex];           
            if (drawNumber === gameNumber) {
                numberOfHits += 1;
            }
        }
    }
    return numberOfHits;
}

// Sortear os números da Mega Sena
let megaSena = generateGame ();

// Criar meu jogo
let bernardoGame = [7, 14, 19, 23, 33, 49]
let israelGame = generateGame();
let paolaGame = generateGame();
let icaroGame = [3, 5, 13, 19, 23, 25]

console.log('O jogo do Bernardo teve ' + checkMegaSenaResult(megaSena, bernardoGame) + ' acertos')
console.log('O jogo do Israel teve ' + checkMegaSenaResult(megaSena, israelGame) + ' acertos')
console.log('O jogo do Paola teve ' + checkMegaSenaResult(megaSena, paolaGame) + ' acertos')
console.log('O jogo do Icaro teve ' + checkMegaSenaResult(megaSena, icaroGame) + ' acertos')
