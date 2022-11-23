/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let nextSmallest = queue.dequeue(); // dequeues first item and assigns to let
  while (nextSmallest > queue.peek()) { // loop while nextSmallest is bigger than front of queue
    queue.enqueue(nextSmallest); // queues nextSmallest again at back of line
    nextSmallest = queue.dequeue(); // while peek is smaller than nextSmallest, will dequeue it and reassign to let
  }
  return nextSmallest;
}
