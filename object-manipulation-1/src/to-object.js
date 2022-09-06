/* exported toObject */
// function named toObject with keyValuePair as parameter
// assign a key value pair to a new object
// return object from function

function toObject(keyValuePair) {
  var object = {}; // assign empty object to variable
  var key = keyValuePair[0]; // in key-value pair, key is always at 0 index so assign to key variable
  var value = keyValuePair[1]; // in key-value pair, value is always at 1 index so assign to value variable
  object[key] = value; // bracket notation to declare object at key is assigned a value
  return object;
}
