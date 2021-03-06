import readlineSync from 'readline-sync';
import askName from './cli.js';

const gamesCount = 3;

const playGameIteration = (name, question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const gameLoop = (description, getQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(description);
  for (let i = 0; i < gamesCount; i += 1) {
    const [question, answer] = getQuestion();
    if (!playGameIteration(name, question, answer)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameLoop;
