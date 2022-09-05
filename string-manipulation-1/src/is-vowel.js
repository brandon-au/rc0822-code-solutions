/* exported isVowel */

// function with string character as argument
// conditional to check if character is a vowel

function isVowel(char) {
  var vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var i = 0; i < vowel.length; i++) {
    if (vowel[i] === char) {
      return true;
    }
  }
  return false;
}
