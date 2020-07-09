import gameLoop from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameTask = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};

const game = () => gameLoop(
  rules,
  getGameTask,
);

export default game;
