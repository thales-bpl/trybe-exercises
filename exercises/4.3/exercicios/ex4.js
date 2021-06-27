let n = 5
let altura = ( n + 1 ) / 2;

for (let index = 0; index < altura; index += 1) {
    let resultado = '';
    for (let index2 = 1; index2 <= n; index2 += 1) {
        if (index2 <= (altura + index) && index2 >= (altura - index)) {
            resultado += '*';
        } else {
            resultado += ' ';
        }
    }
    console.log(resultado)
}
