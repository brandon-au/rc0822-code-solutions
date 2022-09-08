var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', function (event) { // anonymous callback fucntion

  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.tagName !== 'BUTTON') { // another option to delegate, event.target also works
    return; // returns from function if event target is not a button that was clicked
  }

  var $item = event.target.closest('.task-list-item'); // assign target closest to list to variable
  console.log('closest .tag-list-item:', $item); // log that the list item was click
  $item.remove(); // will remove that list item from ul once clicked
});

// function task(event) {
//   console.log('event.target:', event.target);
//   console.log('event.target.tagName:', event.target.tagName);
//   if (event.target && event.target.matches('li.button')) {
//     var $item = event.closest('.task-list-item');
//     console.log('closest .tag-list-item:', $item);
//     $taskList.remove($item);
//   }
// }

// my code before Q&A
