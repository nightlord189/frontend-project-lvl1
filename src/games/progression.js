import readlineSync from 'readline-sync';
import askName from '../cli.js';
import getRandomInt from '../index.js';

const progressionLength = 10;

const askQuestion = (name) => {
  const start = getRandomInt(1, 10);
  const change = getRandomInt(1, 10);
  const arr = [start];
  for (let i = 1; i < progressionLength; i += 1) {
    arr.push(arr[i - 1] + change);
  }
  const missingIndex = getRandomInt(0, progressionLength - 1);
  const arrStr = arr.join(' ').replace(arr[missingIndex], '..');
  console.log(`Question: ${arrStr}`);
  const answer = readlineSync.question('Your answer: ');
  if (parseInt(answer, 10) === arr[missingIndex]) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${arr[missingIndex]}".`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const game = () => {
  const name = askName();
  console.log('What number is missing in the progression?');
  let successCount = 0;
  while (successCount < 3) {
    successCount = askQuestion(name) ? successCount + 1 : 0;
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
