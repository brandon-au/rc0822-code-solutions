const add = require('./add'); // pulls function from add.js module so it can used in calculate module
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

const num1 = Number(process.argv[2]);
// assigns index 2 in argv array to a variable, and parses from string to a number
const operation = process.argv[3];
// assigns index 3 to the operation thats being performed
const num2 = Number(process.argv[4]);
// assigns index 4 to second number

if (operation === 'plus') {
  // checks argv at index 3 for the operation, in this case: plus
  console.log('Result:', add(num1, num2));
  // if index 3 is plus, performs the add function from add.js with num1 and num2 as arguments
} else if (operation === 'minus') {
  console.log('Result:', subtract(num1, num2));
} else if (operation === 'over') {
  console.log('Result:', divide(num1, num2));
} else if (operation === 'times') {
  console.log('Result:', multiply(num1, num2));
} else {
  console.log('invalid operation');
}
