import gameLoop from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameTask = () => {
  const number = getRandomInt(1, 31);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const playGame = () => gameLoop(
  description,
  getGameTask,
);

export default playGame;
