import gameLoop from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (x, y) => {
  let [n1, n2] = [x, y];
  let remainder = 1;
  while (remainder > 0) {
    remainder = n1 % n2;
    n1 = n2;
    n2 = remainder;
  }
  return n1;
};

const getGameTask = () => {
  const n1 = getRandomInt(1, 31);
  const n2 = getRandomInt(1, 31);
  const correctAnswer = getGCD(n1, n2);
  const question = `${n1} ${n2}`;
  return [question, correctAnswer.toString()];
};

const game = () => gameLoop(
  description,
  getGameTask,
);

export default game;
