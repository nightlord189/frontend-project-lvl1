import gameLoop from '../index.js';
import getRandomInt from '../utils.js';

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestion = () => {
  const number = getRandomInt(1, 31);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const game = () => gameLoop(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestion,
);

export default game;
