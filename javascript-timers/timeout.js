
var $message = document.querySelector('.message');

setTimeout(messageChange, 2000);
function messageChange() {
  $message.textContent = 'Hello There';
}
