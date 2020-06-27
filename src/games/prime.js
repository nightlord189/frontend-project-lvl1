import readlineSync from 'readline-sync';
import { gameLoop, getRandomInt } from '../index.js';

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

const askQuestion = (name) => {
  const number = getRandomInt(1, 31);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
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
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  askQuestion,
);

export default game;
