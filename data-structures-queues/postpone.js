/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const front = queue.dequeue();
  queue.enqueue(front);
}

// queue.enqueue(queue.dequeue());
