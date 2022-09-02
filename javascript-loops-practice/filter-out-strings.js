/* exported filterOutStrings */

// function with array as argument
// for loop to run through array
// conditional statement - check if values at i index are a not a string
// if not a string push in to empty array variable
// return variable

function filterOutStrings(values) {
  var array = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      array.push(values[i]);
    }
  }
  return array;
}
