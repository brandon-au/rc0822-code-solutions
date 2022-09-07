var $contactForm = document.querySelector('#contact-form'); // query selecting DOM for contact form that holds the 3 inputs

function handleSubmit(event) { // defining function that will run when inputs
  // are submitted
  event.preventDefault(); // method to prevent page from refreshing the page after
  // submitting; very commonly the first line for input functions
  var name = $contactForm.elements.name.value; // storing the value of the name
  // property of the elements property of the variable $contactForm thats queried
  // from the id: contact-form
  var email = $contactForm.elements.email.value; // elements property lets you access
  // the index inside the contact form without dot notation
  var message = $contactForm.elements.message.value;
  var messageData = {
    name,
    email,
    message
  };
  console.log('messageData:', messageData); // confirms the inputs are returned
  // would remove when code is pushed to production - ONLY for testing functionality
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmit);
// function fires when $contactForm is submitted, pushes var messageData to
// console as an object and resets form
