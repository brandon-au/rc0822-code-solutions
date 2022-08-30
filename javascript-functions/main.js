function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(8);
console.log('value of convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey' + ' ' + name;
  return greeting;
}
var fullGreeting = greet('Brandon');
console.log('value of fullGreeting:', fullGreeting);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var areaResult = getArea(17, 42);
console.log('value of areaResult:', areaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var getFirstNameResult = getFirstName({ firstName: 'Lelouch', lastName: 'Lamerouge' });
console.log('value of getFirstName:', getFirstNameResult);

function getLastElement(array) { // not actually an array, just the name of the parameter
  var lastIndex = array.length - 1; // lastIndex variable is being assigned the last index in the variable array
  var lastElement = array[lastIndex]; // lastElement variable is being assigned element at the last index (variable lastIndex) in the array that would be used in the argument
  return lastElement;
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('value of getLastElement:', getLastElementResult);
