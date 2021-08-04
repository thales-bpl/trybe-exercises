// ----- Object Destructuring ----- //

// Acessa chaves no objeto. Menos verboso e mais prático que percorrer objeto

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { item, seller } = product;
console.log(item); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

// Podemos reatribuir o nome da propriedade de um objeto e declará-la como variável:
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: studentName, b: classAssigned, c: subject } = student;

console.log(studentName); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

// Syntax: { propriedade:nomeVariavel } = objeto;

// Um bom uso de destructuring é quando queremos usar o valor de um objeto como parâmetro de uma função
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => { // Podemos passar apenas o nomeVariavel como parâmetro dentro de { }
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
