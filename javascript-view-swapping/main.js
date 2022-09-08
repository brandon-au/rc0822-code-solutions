// query DOM for tab-container, nodelist for .tab, nodelist for .view
// click event listener to tab container; holds the 3 languages tabs
// conditional to check if clicking the tab
// if no, return from function
// if yes, loop through .tab nodelist and compare to event.target
// element that equals event.target gets className updated and made .active
// other elements should NOT be active

var $tabContainer = document.querySelector('.tab-container');
var $tabNodes = document.querySelectorAll('.tab');
var $viewNodes = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab') === false) {
    return;
  }
  for (let i = 0; i < $tabNodes.length; i++) {
    if ($tabNodes[i] === event.target) {
      $tabNodes[i].className = 'tab active';
    } else {
      $tabNodes[i].className = 'tab';
    }
  }
  var $dataView = event.target.getAttribute('data-view');
  for (let i = 0; i < $viewNodes.length; i++) {
    if ($viewNodes[i].getAttribute('data-view') === $dataView) {
      $viewNodes[i].className = 'view';
    } else {
      $viewNodes[i].className = 'view hidden';
    }
  }
});
