// Posição da rainha
let queenRowPosition = 6;
let queenColumnPosition = 4;

//posição da peça oponente
let opponentRowPosition = 4;
let opponentColumnPosition = 3;

// Pode atacar?
let canAttack = Boolean;

// Cálculo pra entender se o ataque foi bem sucedido

// Se a rainha está na mesma linha que a peça oponente ou na mesma coluna, significa que o ataque foi bem sucedido

if (queenRowPosition === opponentRowPosition || queenColumnPosition === opponentColumnPosition) {
    canAttack = true
} else {
    canAttack = false
}
console.log('A rainha pode atacar na vertical ou horizontal: ' + canAttack)

// Como fazer as diagonais?
// range de casas: 1 a 8
// ajustando a rainha: coluna +1 row +1; coluna +1 row -1; coluna -1 row +1; coluna -1 row-1.

for (let index = 1; index < 8; index += 1) {
    let currentQueenRow = queenRowPosition - index;
    let currentQueenColumn = queenColumnPosition - index;

    // Se a posição da linha OU da coluna forem igual a zero, o tabuleiro terminou 
    if (currentQueenColumn === 0 || currentQueenRow === 0) {
        break;
    }

    // Se a posição corrente da linha E e da coluna forem iguais que a peça, posso atacar
    if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
        canAttack = true;
        console.log('Ataque possível na diagonal inferior esquerda');
        break;
    }
}


// identificar se a peça do oponente está na diagonal superior esquerdo
for (let index = 1; index < 8; index += 1) {
    let currentQueenRow = queenRowPosition + index;
    let currentQueenColumn = queenColumnPosition - index;

    if (currentQueenColumn === 9 || currentQueenRow === 0) {
        break;
    }

    if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
        canAttack = true;
        console.log('Ataque possível na diagonal superior esquerda');
        break;
    }    
}


// identificar se a peça do oponente está na diagonal superior direita
for (let index = 1; index < 8; index += 1) {
    let currentQueenRow = queenRowPosition + index;
    let currentQueenColumn = queenColumnPosition + index;

    if (currentQueenColumn === 9 || currentQueenRow === 9) {
        break;
    }

    if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
        canAttack = true;
        console.log('Ataque possível na diagonal superior direita');
        break;
    }
}


// inferior direita
for (let index = 1; index < 8; index += 1) {
    let currentQueenRow = queenRowPosition - index;
    let currentQueenColumn = queenColumnPosition + index;

    if (currentQueenColumn === 0 || currentQueenRow === 9) {
        break;
    }

    if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
        canAttack = true;
        console.log('Ataque possível na diagonal inferior direita');
        break;
    }    
}