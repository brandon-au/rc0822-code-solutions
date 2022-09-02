/* exported oddOrEven */

// function with numbers array as argument
// for loop to run through array of numbers
// conditional to check if value at array[i] is even or odd
// check if even or odd by doing %% operator and setting equal to 1 or 0
// 1 = odd, 0 = even
// if = 1, return odd; if = 0, return even
// push new array (string of odds or evens)

function oddOrEven(numbers) {
  var array = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      array.push('even');
    } else {
      array.push('odd');
    }
  }
  return array;
}
