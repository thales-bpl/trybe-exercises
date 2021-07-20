function greet(name, age) {
    console.log('O/A ' + name + ' possui ' + age + ' anos.')
}
greet ('Ana', 25)


function makeGreeting (name, age) {
    return 'E aí ' + name + ' tudo bem com você? Você tem ' + age + ' anos.'
}
let greetings = makeGreeting('Vinicius', 23)
console.log(greetings)


function sum(num1, num2) {
    return num1 + num2;
}
let result = sum(1, 2);


function canDrive(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
