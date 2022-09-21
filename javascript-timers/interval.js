
var $message = document.querySelector('.countdown-display');

// setInterval(countdown, 1000);
var count = 4;
var countdownStop = setInterval(countdown, 1000);
function countdown() {
  count--;
  $message.textContent = count;
  if (count === 0) {
    $message.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownStop);
  }
}
