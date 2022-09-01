/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() { // defines new function
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) { // defines loop that will run while variable(currentNumber) is less than or equal to 10
    numbers.push(currentNumber); // pushes currentNumber into the numbers array
    currentNumber++; // while currentNumber is less than 10, code will increment currentNumber by 1
  }
  return numbers; // returns numbers array after condition is met and code terminates
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2; // increments currentNumber by 2 and reassigns it to the variable; will make current number could by 2's to 20 instead of going up by 1 starting at 2
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count < times) { // loops while count is less than times inside the argument when function is called
    repeated = repeated + word; // repeated is assigned new value: empty string concatenated with word in first iteration(specified in argument when function is called), contintues to concat. word while code loops
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function getKeys(object) {
  var keys = []; // assign empty array to variable keys
  for (var key in object) { // for...in loops - only one variable is being defined so only getting key from key-value pair in object
    keys += key + ', '; // keys variable gets assigned the key in key-value pair from object, then concatenated with comma
  }
  return keys; // returns function with list of keys from object
}

function getValues(object) {
  var values = [];
  for (var key in object) {
    values += object[key] + ', ';
  }
  return values;
}
