// 1. document.getElementById('argumento') vai retornar somente um elemento

// 2. document.getElementsByTagName('argumento') : vai retornar um array de elementos por Tag
    // document.getElementsByTagName('argumento') [i] : retorna o elementi i do array de elementos

// 3. document.getElementsByClassName('argumento') : vai retornar um array de elementos por Classe

// 4. document.querySelector('argumento')  : captura o primeiro elemento que satisfaz a condição argumentada: usar '#' pra ID ou '.' pra Class
// Retorna apenas 1 element
// Trabalha com seletores CSS
// Mais flexível que os elementos getElementBy
// document.querySelectorAll('argumento') : captura todos os elementos que satisfazem a condição argumentada

function changeColor(elements, color) {
    let selectedElements = document.querySelectorAll(elements)
    for (let index = 0; index < selectedElements.length; index += 1) {
        document.querySelectorAll(elements)[index].style.backgroundcolor = color
    }
}

changeColor('.holiday', 'blue')

alert ('olá, tudo bem?')