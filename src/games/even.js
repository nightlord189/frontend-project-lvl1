import readlineSync from 'readline-sync';
import askName from '../cli.js';

const askQuestion = (name) => {
  const number = Math.floor(Math.random() * 100) + 1; // from 1 to 100
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

const game = () => {
  const name = askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let successCount = 0;
  while (successCount < 3) {
    successCount = askQuestion(name) ? successCount + 1 : 0;
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
