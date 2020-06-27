import readlineSync from 'readline-sync';
import askName from './cli.js';

const getRandomInt = (min, max) => min + Math.floor(Math.random() * Math.floor(max)) + 1;

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
  const name = askName();
  console.log(greeting);
  let successCount = 0;
  while (successCount < 3) {
    const [question, answer] = getQuestion();
    successCount = askQuestion(name, question, answer) ? successCount + 1 : 0;
  }
  console.log(`Congratulations, ${name}!`);
};

export { getRandomInt, gameLoop };
