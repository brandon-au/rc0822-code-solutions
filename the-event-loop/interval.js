let count = 3;

const countdownStop = setInterval(countdown, 1000);

function countdown() {
  if (count === 0) {
    clearInterval(countdownStop);
    console.log('Blast off!');
  } else {
    console.log(count);
  }
  count--;
}
