function handleFocus(event) {
  console.log('focus event fired'); // confirms in console that function works
  console.log('  event-target-name', event.target.name); // spaces are for clarity in console log
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('  event-target-name', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name + ':', event.target.value);
} //

var $userName = document.getElementById('user-name'); // can use either, getElementById does not need '#' sign
var $userEmail = document.querySelector('#user-email');
var $userMessage = document.querySelector('#user-message');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('click', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('click', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
