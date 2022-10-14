/* exported capitalize */
// function with a string(single word) as an argument
// goes through string and lowercases all the letters
// returns word with first character capitalized

function capitalize(word) {
  var temp = word[0].toUpperCase(); // taking character at index 0 and capitalizing it, then assigning to variable temp
  for (var i = 1; i < word.length; i++) { // runs string through loop starting at SECOND character because i = 1
    temp = temp + word[i].toLowerCase(); // lowercases letter at index 1, and concatenates it to temp, which has the first capital letter
  }
  return temp;
}
