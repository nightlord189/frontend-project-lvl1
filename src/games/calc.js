import readlineSync from 'readline-sync';
import { gameLoop, getRandomInt } from '../index.js';

const operations = ['+', '-', '*'];

const calcResult = (n1, n2, oper) => {
  switch (oper) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      return NaN;
  }
};

const askQuestion = (name) => {
  const n1 = getRandomInt(1, 100); // from 1 to 100
  const n2 = getRandomInt(1, 100);
  const oper = operations[getRandomInt(0, 2)];
  const correctAnswer = calcResult(n1, n2, oper);
  console.log(`Question: ${n1} ${oper} ${n2}`);
  const answer = readlineSync.question('Your answer: ');
  if (parseInt(answer, 10) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const game = () => gameLoop(
  'What is the result of the expression?',
  askQuestion,
);

export default game;
