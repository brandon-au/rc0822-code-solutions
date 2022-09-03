/* exported isLowerCased */

// function with single word as argument
// for loop to run through the argument string
// conditional statement to check if a character in string is uppercase
// if false, return false
// outside loop, if all conditionals were false, then return true

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) { // loops through word string
    if (word[i] === word[i].toUpperCase() && word[i] !== '-') { // checks if letter at i index of word is equal to the same letter at i indexxed if it was lowercased
      return false; // being equal means letter lowercased at i index, meaning the string can't be all uppercased so the boolean returns false
    }
  }
  return true; // in condition isn't met, means none of the letters are lowercase so the function returns true
}
