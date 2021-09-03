// 1 --> qual tipo de evento deve ser escutado? (string)
// 2 --> o que deve ser feito quando o evetno ocorrer (function)


window.onload = funcaoMagica() ;{
    let button = document.getElementById('start-race-btn');

    let car1 = document.querySelector('.car1');
    let car2 = document.querySelector('.car2');

    resetCarsPosition()
    

    button.addEventListener('click', function () {
        car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 100 + 'px';
        car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 100 + 'px';
    
        if (parseInt(car1.style.marginLeft) > window.innerWidth) {
            alert('Carro VERMELHO ganhou!');
            resetCarsPosition();
        }
        if (parseInt(car2.style.marginLeft) > window.innerWidth) {
            alert('Carro VERDE ganhou!');
            resetCarsPosition();
        }
    
    });

    function resetCarsPosition () {
        car1.style.marginLeft = '0 px;'
        car2.style.marginLeft = '0 px;'
    }
}

