/* exported includesSeven */

// function with array as argument
// returns boolean indicating if number: 7 is in the array
// for loop to run through array
// conditional to check if 7 is in array
// if yes, returns true; if no returns false

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
