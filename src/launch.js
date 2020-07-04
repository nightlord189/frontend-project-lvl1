import readlineSync from 'readline-sync';
import even from './games/even.js';
import calc from './games/calc.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';
import prime from './games/prime.js';

const launch = () => {
  let index = '';
  while (index !== 'exit') {
    index = readlineSync.question('Menu: \n1 - even \n2 - calc \n3 - gcd \n4 - progression \n5 - prime \nSelect game: ');
    switch (index) {
      case '1': even(); break;
      case '2': calc(); break;
      case '3': gcd(); break;
      case '4': progression(); break;
      case '5': prime(); break;
      default: console.log('Bad index. Exit'); index = 'exit';
    }
  }
};

export default launch;
