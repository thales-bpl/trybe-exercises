//Exercícios 5
let a1 = Number
let a2 = Number
let a3 = Number
let aCheck = Boolean
a1 = 30
a2 = 90
a3 = 60

if (a1 < 0 || a2 < 0 || a3 < 0) {
    aCheck = false;
} else if (a1 + a2 + a3 == 180) {
    aCheck = true;
} else {
    aCheck = false;
}

if (aCheck == true)
    console.log('Triângulo válido')
else {
    console.log('Erro ao plotar o triângulo')
}