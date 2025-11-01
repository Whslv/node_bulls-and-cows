'use strict';

const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = generateRandomNumber();

function ask() {
  rl.question('What are your 4 digits?', (digits) => {
    const trimedDigits = digits.trim();
    const digitsValid = checkIsValidUserInput(trimedDigits);
    const { bulls } = getBullsAndCows(trimedDigits, randomNumber);

    if (!digitsValid) {
      throw new Error('Digits are not valid');
    } else if (bulls === 4) {
      rl.close();
    } else {
      ask();
    }
  });
}

ask();
