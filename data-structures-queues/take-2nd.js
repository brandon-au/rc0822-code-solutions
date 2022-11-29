/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  queue.enqueue(queue.dequeue());
  return queue.dequeue();
}

// const first = queue.dequeue();
// queue.enqueue(first);
// // queue.dequeue();
// return queue.peek();

// function take2nd(queue) {
//   if (queue.peek() === undefined) {
//     return queue.peek();
//   }
// queue.enqueue(queue.dequeue())
// return queue.dequeue()
