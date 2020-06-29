import gameLoop from '../index.js';
import getRandomInt from '../utils.js';

const progressionLength = 10;

const getQuestion = () => {
  const start = getRandomInt(1, 10);
  const change = getRandomInt(1, 10);
  const arr = [start];
  for (let i = 1; i < progressionLength; i += 1) {
    arr.push(arr[i - 1] + change);
  }
  const missingIndex = getRandomInt(0, progressionLength - 1);
  const arrStr = arr.join(' ').replace(arr[missingIndex], '..');
  return [arrStr, arr[missingIndex].toString()];
};

const game = () => gameLoop(
  'What number is missing in the progression?',
  getQuestion,
);

export default game;
