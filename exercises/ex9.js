let array = []

for (let index = 1; index <= 25; index += 1) {
    array.push(index)  
}

let arrayDiv2 = []

for (let indexD = 0; indexD < array.length; indexD += 1) {
    arrayDiv2.push(array[indexD]/2)
}

console.log(arrayDiv2)