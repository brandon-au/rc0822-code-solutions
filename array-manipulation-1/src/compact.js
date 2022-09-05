/* exported compact */
// function named compact with array as parameter
// no using slice, splice, pop, shift, filter**
// for loop to run through array
// conditional to check array for false, null, NaN, 0 & -0, undefined, empty string,
// and truthy elements
// if yes, remove from array
// assign modified array to new variable
// return variable

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) { // loops through array at each index
    if (array[i]) { // evaluates each element as truthy or falsey, if truthy
      // then pushes into newArray, if falsey then omits it from array
      newArray.push(array[i]);
    }
  }
  return newArray;
}
