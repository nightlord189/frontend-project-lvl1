import gameLoop from '../index.js';
import getRandomInt from '../utils.js';

const getGCD = (n1, n2) => {
  while (true) {
    if (n2>n1) {
      [n1, n2] = [n2, n1]
    }
    const remainder = n1 % n2;
    if (remainder === 0) {
      return n2
    }
    n1 = remainder;
  }
};

const getGameTask = () => {
  const n1 = getRandomInt(1, 31);
  const n2 = getRandomInt(1, 31);
  const correctAnswer = getGCD(n1, n2);
  const question = `${n1} ${n2}`;
  return [question, correctAnswer.toString()];
};

const game = () => gameLoop(
  'Find the greatest common divisor of given numbers.',
  getGameTask,
);



export default game;
