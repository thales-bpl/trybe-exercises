/* test('Não deveria passar!', () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
  }, 500);
}); */

/* test('Não deveria passar!', (done) => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
    done();
  }, 500);
}); */

/* test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done();
    }
  }, 500);
}); */

/* test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error); // Alteramos esta linha
    }
  }, 500);
}); */

const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result); // o que essa callback está fazendo aqui??
  }, 500);
};

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => { // cadê a callback que existia como parâmetro da func original ??
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});

// DÚVIDAS:
// L43
// L48