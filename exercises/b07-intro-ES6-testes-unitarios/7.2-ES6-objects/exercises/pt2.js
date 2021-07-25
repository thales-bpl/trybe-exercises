const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


// Ex1:
const newClass = (object, newKey, value) => {
  object[newKey] = value;
}
newClass(lesson2, 'turno', 'manhã');
console.log(lesson2);

// Ex2:
const objectKey = (object) => {
  return Object.keys(object);
}

console.log(objectKey(lesson3));

// Ex3:
const objectLength = (object) => {
  return Object.keys(object).length;
}

console.log(objectLength(lesson1));

// Ex 4:
const objectValues = (object) => {
  return Object.values(object);
}
console.log(objectValues(lesson2));

