// Exercício 10
let custoProducao = Number
let valorVenda = Number
let imposto = Number
imposto = 0.2
custoProducao = 20
valorVenda = 80

let custoTotal = custoProducao + custoProducao * (imposto)
let lucroUn = valorVenda - custoTotal
let lucroTotal = lucroUn * 1000

if (valorVenda > 0 || custoProducao > 0) {
    console.log(lucroTotal)
} else {
    console.log('Erro. Encerrando programa(??)')
}