/* exported reverseWord */
// function with single word as string
// method to reverse string and return from function

function reverseWord(word) {
  var string = '';
  for (var i = word.length - 1; i >= 0; i--) { /* loop starts at the end of string
because i is equal to word.length - 1, loop will continue as long as is greater than 0;
each loop that runs will decrement the string by 1 */
    string += word[i]; /* loop function starts at end of string, assigns adds and assigns
    character at index to empty string variable, loops and continues to assign until
    string decrements to 0 */
  }
  return string; // returns final string from function
}
