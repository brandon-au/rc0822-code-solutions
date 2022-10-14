// web page with a yellow circle and light peach background - choose colors carefully
// give circle id selector to style in center of the page
// css classes for yellow circle on peach background
// css classes for dark gray circle on almost-black background
// query circle to the DOM and assign to a variable
// declare addEventListener for above variable to add functionality to button
// once clicked, change class names for id between light and dark stylings

var $lightCircle = document.querySelector('.circle-light');
var $lightCircleShadow = document.querySelector('.circle-light-shadow');
var $background = document.querySelector('.container');

var clickCount = 0;

function onOff() {
  clickCount++;
  if (clickCount % 2 === 0) {
    $lightCircle.className = 'circle-dark';
    $lightCircleShadow.className = 'circle-dark-shadow';
    $background.className = 'container container-dark';

  } else {
    $lightCircle.className = 'circle-light';
    $lightCircleShadow.className = 'circle-light-shadow';
    $background.className = 'container container-light';
  }
}

$lightCircle.addEventListener('click', onOff);
