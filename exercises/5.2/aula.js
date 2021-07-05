// Hugo está fazendo essa aula no console to navegador pra mostrar em tempo real as mudanças no site
document.createElement('div')
document.createElement('h1')

let div = document.createElement('div');
div.innerHTML = 'Olá! Tudo bem?'
// Criamos a variável, mas ela inda não aparece no HTML

document.body.appendChild(div);
// Só a partir do appendChild que o elemento vai pro HTML

div.id = 'saudacao'
// Adiciona a propriedade id em determinado elemento (nesse caso, div)

div.style.backgroundColor = 'yellow'
// Adiciona um atributo style em determinado elemento (nesse caso, bgcolor na div).
// É uma boa prática adicionar elementos pelo JS ao invés de pelo style.css? As vezes sim.

div.classname = 'month-container'
// Adiciona uma classe a um elemento
div.classname = 'xulambs'
// Ao adicionar uma outra classe dessa forma, subscrevemos a classe anterior

div.classList.add('xulambs')
// Adiciona uma classe a um elemento SEM subscrever as classes anteriores

document.body.removeChild(div);
// Remove um elemento da árvore HTML (nesse caso, nossa div)
// Sintaxe: node.removeChild(child) para remover a child desejada 

let divs = document.querySelectorAll('div');
divs // será um nodeList que contem todos as divs que selecionamos pelo querySelectorAll
for (let div of divs) {
    document.body.removeChild(div);
}
// Remove todas as divs da página via for loop


document.body.parentNode
// Acho que ele fez isso só pra mostrar que o pai do body é o HTML

let xablau = document.querySelector('div')
xablau
xablau.parentNode // Mostra os pais de determinado elemento

document.body.childNodes
// Retorna um array. Tudo que ela me retorna aqui é um nó, mas não necessariamente um elemento

document.body.children
// Retorna um array. Tudo que ela me retorna aqui é um elemento, mas não necessariamente um nó

// Elementos são só as tags HTML
// Tag HTML são nó e elementos
// Todo elemento é um nó, mas nem todo nó é um elemento

document.body.firstElementChild
// Retorna o primeiro elemento child

document.body.firstChild
// Retorna o primeiro Child (pode ser nó ou elemento)

document.body.lastChild
// Retorna último Child
document.body.lastElementChild
// Retorna último elemento Child

let weekDaysContainer = document.querySelector('.week-days-container');
// Selecionamos essa div como exemplo para usarmos no caso de caminharmos entre irmãos
weekDaysContainer.previousElementSibling
weekDaysContainer.nextElementSibling
// Ambos comendos caminham entre elementos irmãos

weekDaysContainer.nextSibling
weekDaysContainer.previousSibling
// Nós retorna o nó anterior ou próximo

