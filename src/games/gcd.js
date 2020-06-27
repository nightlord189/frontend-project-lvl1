import readlineSync from 'readline-sync';
import askName from '../cli.js';
import getRandomInt from '../index.js';

const getGCD = (n1, n2) => {
  let var1 = n1;
  let var2 = n2;
  let result = 0;
  while (result === 0) {
    if (var1 > var2) {
      const remainder = var1 % var2;
      if (remainder === 0) {
        result = var2;
        break;
      }
      var1 = remainder;
    } else {
      const remainder = var2 % var1;
      if (remainder === 0) {
        result = var1;
        break;
      }
      var2 = remainder;
    }
  }
  return result;
};

const askQuestion = (name) => {
  const n1 = getRandomInt(1, 100); // from 1 to 100
  const n2 = getRandomInt(1, 100);
  const correctAnswer = getGCD(n1, n2);
  console.log(`Question: ${n1} ${n2}`);
  const answer = readlineSync.question('Your answer: ');
  if (parseInt(answer, 10) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const game = () => {
  const name = askName();
  console.log('Find the greatest common divisor of given numbers.');
  let successCount = 0;
  while (successCount < 3) {
    successCount = askQuestion(name) ? successCount + 1 : 0;
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
