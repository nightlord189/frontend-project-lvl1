import gameLoop from '../index.js';
import getRandomInt from '../utils.js';

const progressionLength = 10;

const createProgression = (start, diff) => {
  const progression = [start];
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + diff);
  }
  return progression;
};

const getGameTask = () => {
  const start = getRandomInt(1, 10);
  const diff = getRandomInt(1, 10);
  const progression = createProgression(start, diff);
  const missingIndex = getRandomInt(0, progression.length - 1);
  const progressionStr = progression.join(' ').replace(progression[missingIndex], '..');
  return [progressionStr, progression[missingIndex].toString()];
};

const game = () => gameLoop(
  'What number is missing in the progression?',
  getGameTask,
);

export default game;
