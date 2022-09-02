/* exported sumAll */
function sumAll(numbers) {
  var sum = 0; // assigned 0 to variable sum (variable that will hold the subsequent sums it loops through array)
  for (var i = 0; i < numbers.length; i++) { // set first iteration to 0, run as long as iterations are less than length of numbers array, increments by one each loop
    sum += numbers[i]; // sum gets new assignment - in numbers array will add next number and assign it to sum, continue to add and assign to sum as loop runs
    var total = sum; // adds total from above expression and assigns to new variable
  }
  return total; // return from expression the total sum of numbers array
}
