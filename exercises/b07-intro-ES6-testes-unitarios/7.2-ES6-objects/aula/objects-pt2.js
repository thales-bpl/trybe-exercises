const books = {
  collection: 'The Lord of the Rings',
  book1: 'The Fellowship of the Ring',
  book2: 'Two Towers',
  book3: 'Return of the King',
};

const bookAuthor = {
  authorName: 'J. R. R. Tolkien',
};

console.log('------------ antes ------------')
console.log('books: ', books)
console.log('bookAuthor: ', bookAuthor)

const result = Object.assign(books, bookAuthor);

console.log('------------ depois ------------')
console.log('books: ', books)
console.log('bookAuthor: ', bookAuthor)
console.log('result: ', result)

// ---------- // ---------- // ---------- //
/* Deep Clone */
// Ao alterar um tipo primitivo do objeto a ser copiado, isso não altera a cópia. Porém, se alterarmos um objeto dentro desse objeto copiado, essa alteração irá se refletir em todos os objetos (original(is) e copiado(s)).
const original = {
  name: 'Fiesta',
  car: {
    color: 'blue',
  },
};

const copied = Object.assign({}, original);

console.log('------------ antes ------------')
console.log('original: ', original);
console.log('copied: ', copied);

original.name = 'Focus';
original.car.color = 'yellow';

console.log('------------ depois ------------')
console.log('original: ', original);
console.log('copied: ', copied);
