import askName from './cli.js';

const getRandomInt = (min, max) => min + Math.floor(Math.random() * Math.floor(max)) + 1;

const gameLoop = (greeting, askQuestion) => {
  const name = askName();
  console.log(greeting);
  let successCount = 0;
  while (successCount < 3) {
    successCount = askQuestion(name) ? successCount + 1 : 0;
  }
  console.log(`Congratulations, ${name}!`);
};

export { getRandomInt, gameLoop };
