/* exported initial */
// function named intial with array as parameter
// for loop required to run through array
// returns new array without last item

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
