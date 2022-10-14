// carousel to cycle through images at time intervals
// arrows to cycle images
// dots to show position of current image and choose different image in array
// create array to hold relative path of images
//

var imgArray = ['./images/001.png', './images/004.png', './images/007.png',
  './images/025.png', './images/039.png'];
var dotArray = [];
var index = 0;
var $dotContainer = document.querySelector('.dot-container');

var stopCarousel = setInterval(imageCarousel, 1000);
var $image = document.querySelector('#first-image');

// for loop to cycle image
function imageCarousel() {
  if (index === imgArray.length - 1) {
    index = 0;
  } else {
    index++;
  }
  $image.setAttribute('src', imgArray[index]);
  dotCarousel();
}

// for loop to change dot state
function dotCarousel() {
  for (var i = 0; i < $dotContainer.children.length; i++) {
    if (index === i) {
      $dotContainer.children[i].className = 'fa-solid fa-circle';
    } else {
      $dotContainer.children[i].className = 'fa-regular fa-circle';
    }
  }
}

var $leftArrow = document.querySelector('.left');
var $rightArrow = document.querySelector('.right');

// left arrow to backwards cycle carousel
$leftArrow.addEventListener('click', function () {
  if (index === 0) {
    index = imgArray.length;
  }
  index--;
  dotCarousel();
  $image.setAttribute('src', imgArray[index]);
  stopCarousel = setInterval(imageCarousel, 3000);
  clearInterval(stopCarousel);
});

// right arrow to cycle carousel
$rightArrow.addEventListener('click', function () {
  if (index === imgArray.length - 1) {
    index = -1;
  }
  index++;
  dotCarousel();
  $image.setAttribute('src', imgArray[index]);
  stopCarousel = setInterval(imageCarousel, 3000);
  clearInterval(stopCarousel);
});

// function to create dogs
function renderDot(indexPosition) {
  var $createDot = document.createElement('i');
  $createDot.className = 'fa-regular fa-circle';
  $createDot.setAttribute('data-id', indexPosition);
  $dotContainer.appendChild($createDot);
  dotArray.push($createDot);
}

for (var i = 0; i < imgArray.length; i++) {
  renderDot(i);
}

dotCarousel();

function targetImage(index) {
  $image.setAttribute('src', imgArray[index]);
  for (var i = 0; i < $dotContainer.children.length; i++) {
    if (index === i) {
      $dotContainer.children[i].className = 'fa-solid fa-circle';
    } else {
      $dotContainer.children[i].className = 'fa-regular fa-circle';
    }
  }

}

$dotContainer.addEventListener('click', function (event) {
  if (!event.target.getAttribute('data-id')) {
    return;
  } else {
    var dotTest = event.target.getAttribute('data-id');
    targetImage(dotTest);
  }
  if (event.target === dotTest) {
    $dotContainer.children[index].className = 'fa-solid fa-circle';
  } else {
    $dotContainer.children[index].className = 'fa-regular fa-circle';
  }
});
