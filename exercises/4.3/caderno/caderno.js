// Posição da rainha
let queenRowPosition = 6;
let queenColumnPosition = 4;

//posição da peça oponente
let opponentRowPosition = 4;
let opponentColumnPosition = 6;

// Pode atacar?
let canAttack = false;

// Cálculo pra entender se o ataque foi bem sucedido

// Se a rainha está na mesma linha ou na mesma coluna que a peça oponente, significa que o ataque é possível

if (queenRowPosition === opponentRowPosition || queenColumnPosition === opponentColumnPosition) {
    canAttack = true
    console.log('A rainha pode atacar na vertical ou horizontal: ' + canAttack)
}

// Como fazer as diagonais?
// range de casas: 1 a 8
// ajustando a rainha: coluna +1 row +1; coluna +1 row -1; coluna -1 row +1; coluna -1 row-1.

for (let index = 1; index < 8; index += 1) {
    let currentQueenRow = queenRowPosition - index;
    let currentQueenColumn = queenColumnPosition - index;
    if (currentQueenColumn === 0 || currentQueenRow === 0) {
        break;
    }
    if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
        canAttack = true;
        console.log('A rainha pode atacar na vertical esquerda');
        break;

    }
}

console.log(canAttack)
