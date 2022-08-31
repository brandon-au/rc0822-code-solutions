var a = 6;
var b = 7;
var c = 2;
var maximumValue = Math.max(a, b, c);
console.log('value of maximumValue:', maximumValue);

var heroes = ['Spiderman', 'Garfield', 'Agumon', 'Goku'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
console.log('value of randomNumber:', randomNumber);

var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

// Array methods

var library = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling'
  },
  {
    title: 'Twilight',
    author: 'Stephanie Meyer'
  },
  {
    title: 'Percy Jackson',
    author: 'Rick Riordan'
  }
];
var lastBook = library.pop(); // pop() method removes last element in array and returns it
console.log('value of lastBook:', lastBook);
var firstBook = library.shift(); // shift() method of object removes first element in arrary and returns it
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js); // push() method adds one or more elements to end of array and returns new length
library.unshift(css); // unshift() method adds one or more elements to beginning of array and returns new length
library.splice(1, 1); // splice() method deletes or replaces eleemnts at specified index
console.log('value of library:', library);

// String Methods

var fullName = 'Brandon Au';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
