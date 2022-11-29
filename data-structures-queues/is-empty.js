/* exported isEmpty */

function isEmpty(queue) {
  if (queue.peek() === undefined) {
    return true;
  } else {
    return false;
  }
}

// or return queue.peek() === undefined; since it would return undefined
