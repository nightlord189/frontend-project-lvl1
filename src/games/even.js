import gameLoop from '../index.js';
import getRandomInt from '../utils.js';

const getQuestion = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};

const game = () => gameLoop(
  'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestion,
);

export default game;
