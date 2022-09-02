/* exported getIndexes */

// function being called with an array as argument
// loop that runs through the array
// tracks each element and its position in the index
// returns new array with indexes from input array

function getIndexes(array) {
  var index = []; // assigning empty array to index variable
  for (var i = 0; i < array.length; i++) { // standard loop, start at first iteration, loops until it reaches the end of the array, increments by 1
    var input = i; // assigns the index (position in array) to a variable
    index.push(input); // pushes input(position of element in array) in to the empty index variable, will continue to push those indexes as long as there are elements in the array
  }
  return index; // returns completed index from expression
}
