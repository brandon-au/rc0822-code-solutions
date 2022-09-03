/* exported getWords */

// function with argument being 0 or more words, separated by spaces
// conditional to check if argument is empty string
// if true, return empty array assigned to a variable
// if false, use split method on argument and push into new array
// return array

function getWords(string) {
  var empty = [];
  var newString = [];
  if (string === '') {
    return empty;
  } else {
    newString = string.split(' ');
    return newString;
  }
}
