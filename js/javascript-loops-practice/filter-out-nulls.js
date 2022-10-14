/* exported filterOutNulls */

// function with an array as its argument
// for loop that runs through an array
// conditional statement - if null at [i] then delete
// assign to a new variable
// return variable array with all original inputs except null

function filterOutNulls(values) {
  var array = []; // assign empty array to variable to return at the end
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) { // set conditional if values at index are NOT equal to pull
      array.push(values[i]); // push values at index into empty array variable
    }
  }
  return array;
}

// function with array as argument
// for loop to run through array
// conditional statement to check if values at index are not null
// if not null, push values at index into empty array variable
// returns array
