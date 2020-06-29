import gameLoop from '../index.js';
import getRandomInt from '../utils.js'

const getGCD = (n1, n2) => {
  let var1 = n1;
  let var2 = n2;
  let result = 0;
  while (result === 0) {
    if (var1 > var2) {
      const remainder = var1 % var2;
      if (remainder === 0) {
        result = var2;
        break;
      }
      var1 = remainder;
    } else {
      const remainder = var2 % var1;
      if (remainder === 0) {
        result = var1;
        break;
      }
      var2 = remainder;
    }
  }
  return result;
};

const getQuestion = () => {
  const n1 = getRandomInt(1, 100);
  const n2 = getRandomInt(1, 100);
  const correctAnswer = getGCD(n1, n2);
  const question = `${n1} ${n2}`;
  return [question, correctAnswer.toString()];
};

const game = () => gameLoop(
  'Find the greatest common divisor of given numbers.',
  getQuestion,
);

export default game;
