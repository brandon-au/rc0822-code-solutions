/* exported getValues */
// function named getValues with object as parameter
// use bracket notation to find values at given keys

function getValues(object) {
  var arrays = [];
  for (var key in object) {
    arrays.push(object[key]);
  }
  return arrays;
}
