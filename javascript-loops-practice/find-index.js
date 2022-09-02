/* exported findIndex */

// function with an array and value as its argument
// for loop that runs through the length of an array
// conditional - to check if value is in array at index
// if yes, returns the first index position inside array where value is found
// outside conditional, return -1 if no values in conditional are true

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
