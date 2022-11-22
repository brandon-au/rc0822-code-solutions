/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const top = stack.pop(); // pops top value and assigns to const
  if (top === undefined) { // checks if stack is empty, if empty it returns
    return;
  }
  const next = stack.peek(); // assigns new top of stack to const next
  stack.push(top); // pushes const top back onto stack
  return next; // returns const next, which is now second to top
}

// const top = stack.pop();
// if (typeof top === 'undefined') return;
// const next = stack.peek();
// stack.push(top);
// return next;
