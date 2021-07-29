/* Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem. */

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const studentGrade = (correctAnswers, studentAnswers, checkAnswers) => {
  return checkAnswers(correctAnswers, studentAnswers);
}

const checkAnswers = (gabarito, answers) => {
  let grade = 0;
  for (let index = 0; index < answers.length; index += 1) {
    if (answers[index] === 'N.A') {
      grade += 0;
    } else if (answers[index] === gabarito[index]) {
      grade += 1;
    } else {
      grade -= 0.5;
    }
  }
  return `Nota ${grade}`;
};

console.log(studentGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));