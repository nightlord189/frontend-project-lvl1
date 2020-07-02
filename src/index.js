import readlineSync from 'readline-sync';
import askName from './cli.js';

const gamesCount = 3;

const askQuestion = (name, question, correctAnswer) => {
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

const gameLoop = (greeting, getQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(greeting);
  let successCount = 0;
  while (successCount < gamesCount) {
    const [question, answer] = getQuestion();
    if (askQuestion(name, question, answer)) {
      successCount += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameLoop;
