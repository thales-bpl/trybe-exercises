// Exercício 1

let a = Number
let b = Number

a= 31
b=554

// Soma
let soma = a + b
console.log(soma)

// Subtração
let sub = a - b
console.log(sub)

// Multiplicação
let mult = a * b
console.log(mult)

// Divisão
let div = a / b
console.log(div)

// Módulo
let mod = a % b
console.log(mod)


// Exercício 2
let n1 = Number
let n2 = Number

n1=4
n2=8

if (n1>n2) {
    console.log(n1)
} else {
    console.log(n2)
}


// Exercício 3
let m1 = Number
let m2 = Number
let m3 = Number

m1=14
m2=8
m3=9

if (m1 > m2 && m1 > m3) {
    console.log(m1)
} else if (m2 > m1 && m2 > m3) {
    console.log(m2)
} else {
    console.log(m3)
}


// Exercício 4
let x = Number
x=0

if (x < 0) {
    console.log('negative')
} else if (x==0) {
    console.log('zero')
} else {
    console.log('positive')
}


//Exercícios 5
let t1 = Number
let t2 = Number
let t3 = Number
let tcheck = Boolean
t1=30
t2=90
t3=60

if (t1 < 0 || t2 < 0 || t3 < 0) {
    tcheck = false;
} else if (t1+t2+t3 == 180) {
    tcheck = true;
} else {
    tcheck = false;
}

if (tcheck == true)
    console.log('Triângulo válido')
else {
    console.log('Erro ao plotar o triângulo')
}


// Exercício 6
// Insira o nome da peça na linha abaixo:
let chessp = "Bispo"
let lowchessp = chessp.toLowerCase()

switch (lowchessp) {
    case 'peão':
        console.log('1 casa à frente: vertical ou diagonal')
        break;
    case 'torre':
        console.log('Sem limite de casas: horizontal ou vertical')
        break;
    case 'cavalo':
        console.log('1 casa na horizontal e 2 na vertical ou vice-versa')
        break;
    case 'bispo':
        console.log('Sem limite de casas: diagonal')
        break;
    case 'rainha':
        console.log('Sem limite de casas: horizontal, vertical e diagonal')
        break;
    case 'rei':
        console.log('1 casa: horizontal, vertical e diagonal')
        break;
    default:
        console.log('erro')
}  

// Exercício 7
