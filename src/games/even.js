import readlineSync from 'readline-sync';
import { gameLoop, getRandomInt } from '../index.js';

const askQuestion = (name) => {
  const number = getRandomInt(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const game = () => gameLoop(
  'Answer "yes" if the number is even, otherwise answer "no".',
  askQuestion,
);

export default game;
