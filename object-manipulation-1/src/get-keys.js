/* exported getKeys */
// function named getKeys with object as parameter
// for loop that runs through object's key-value pairs
// push keys in to new array
// returns array from function with just keys

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
