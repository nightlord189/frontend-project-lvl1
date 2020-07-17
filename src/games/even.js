import gameLoop from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (x) => x % 2 === 0;

const getGameTask = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const game = () => gameLoop(
  description,
  getGameTask,
);

export default game;
