import gameLoop from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calcResult = (n1, n2, operation) => {
  switch (operation) {
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

const getGameTask = () => {
  const n1 = getRandomInt(1, 100);
  const n2 = getRandomInt(1, 100);
  const oper = operations[getRandomInt(0, operations.length - 1)];
  const correctAnswer = calcResult(n1, n2, oper);
  const question = `${n1} ${oper} ${n2}`;
  return [question, correctAnswer.toString()];
};

const playGame = () => gameLoop(
  description,
  getGameTask,
);

export default playGame;
