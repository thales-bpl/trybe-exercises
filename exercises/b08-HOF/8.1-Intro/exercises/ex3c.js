const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (gabarito, answers) => {
  (gabarito === answers) ? grade += 1 : grade -= 0.5;
}

const studentGrade = (gabarito, answers) => {
let grade = 0;
  for (let index = 0; index < answers.length; index++) {
    checkAnswers (gabarito[index], answers[index]);
  }
return `Nota ${grade}`;
}

console.log(studentGrade(RIGHT_ANSWERS, STUDENT_ANSWERS));