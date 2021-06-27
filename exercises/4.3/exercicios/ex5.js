let n = 7;
let meio = (n + 1) / 2;

for (let altura = 0; altura < meio; altura += 1) {
    let resultado = '';
    for (let posicaoNaLinha = 1; posicaoNaLinha <= n; posicaoNaLinha += 1) {
        if (posicaoNaLinha === (meio + altura) || posicaoNaLinha === (meio - altura) || altura === (meio - 1)) {
            resultado += '*';
        } else {
            resultado += ' ';
        }  
    }
    console.log(resultado);
}
