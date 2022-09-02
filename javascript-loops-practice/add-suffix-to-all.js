/* exported addSuffixToAll */

// function being called with array as argument
// loop that runs through the array - runs as long as there are elements in the array (strings)
// concatenates suffix to end of each element in a new string
// assign new string to a new variable so it can be returned
// returns new array with modified elements

function addSuffixToAll(words, suffix) {
  var newArray = [];
  for (var i = 0; i < words.length; i++) {
    newArray[i] = words[i] + suffix;
  }
  return newArray;
}
