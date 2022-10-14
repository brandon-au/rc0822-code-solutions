/* exported tail */
// function named tail with array as parameter

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) { // loop starts at index 1 going through array
    newArray.push(array[i]); // push method on newArray, pushes old array at index, which starts at index 1, or in otherwords, the second item onward
  }
  return newArray; // returns empty array with array - index[0]
}
