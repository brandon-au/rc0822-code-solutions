/* exported reverse */
// function named reverse with array as parameter
// loop through array backwards
// assign backwards array to new variable
// return new variable

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
