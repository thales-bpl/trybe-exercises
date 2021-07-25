const person = {
  name: 'Gabriel',
  lastName: 'Oliva',
  age: 27,
  wearGlasses: true,
  address: {
    city: 'Belo Horizonte',
    street: 'R. Mariazinha',
    number: 1440,
  }
}

console.table(person)

// ---------- // ---------- // ---------- //

const person = {
  name : 'Bernugo',
  lastName: 'Salferreira', // trilling comma
}

console.log(person);

console.table(person);

console.log(`Olá, querido ${person.name} ${person.lastName}!`)

console.log(`Olá, querido ${person['name']} ${person['lastName']}!`)

person.age = 33
/* console.table(person); */

person["isBeatiful"] = true;
console.log(person);

const personKeys = Object.keys(person);
console.log(personKeys)

console.log(`Contém a chave name? ${personKeys.includes(`name`)}`)

const personValues = Object.values(person);
console.log(`personValues: ${personValues}`);

// ---------- // ---------- // ---------- //

// Entendendo a diferença entre chamar uma key por ponto ou chaves:
// Nesse primeiro caso conseguimos atribuir dinamicamente várias chaves:
const student = {};
for (let index = 0; index < 5; index += 1) {
  student[index] = 'Xablau'
}
console.log(student);
console.table(student);

// Nesse segundo caso, o JS vai entender que 'index' se trata de uma única key chamada 'index', e por isso teremos apenas um retorno:
const object = {};
for (let index = 0; index < 5; index += 1) {
  student.index = 'Xablau'
}
console.log(student);
console.table(student);

// ---------- // ---------- // ---------- //

const person = {
  name : 'Bernugo',
  lastName: 'Salferreira',
}

const age = 4

const names = ['Giovanni', 'Ariane', 'Rafael'];
console.log(`O type of de age é ${typeof age}`)

const personKeys = Object.keys(person);
console.log(personKeys)

console.log(`Contém a chave name? ${personKeys.includes(`name`)}`)

const personValues = Object.values(person);
console.log(`personValues: ${personValues}`);


// ---------- // ---------- // ---------- //

