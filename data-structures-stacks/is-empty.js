/* exported isEmpty */

function isEmpty(stack) {
  if (stack.peek() === undefined) {
    return true;
  } else {
    return false;
  }
}

// return typeof stack.peek() === undefined;

// if (stack.peek() === undefined) {
//   return true;
// } else {
//   return false;
// }

// cant do stack === undefined because the object 'stack' will never be undefined
// stack is an object so it it will always return same thing
