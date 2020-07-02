import gameLoop from '../index.js';
import getRandomInt from '../utils.js';

const progressionLength = 10;

const createProgression = () => {
  const start = getRandomInt(1, 10);
  const change = getRandomInt(1, 10);
  const arr = [start];
  for (let i = 1; i < progressionLength; i += 1) {
    arr.push(arr[i - 1] + change);
  }
  return arr;
};

const getGameTask = () => {
  const progression = createProgression();
  const missingIndex = getRandomInt(0, progression.length - 1);
  const arrStr = progression.join(' ').replace(progression[missingIndex], '..');
  return [arrStr, progression[missingIndex].toString()];
};

const game = () => gameLoop(
  'What number is missing in the progression?',
  getGameTask,
);

export default game;
