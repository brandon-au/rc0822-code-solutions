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
var person = {
  firstName: 'Lelouche',
  lastName: 'Lamperouge'
};
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('value of getFirstName:', person.firstName);

function getLastElement(array) {
  var lastElement = array.length - 1;
  return lastElement;
}
var array = ['propane', 'and', 'propane', 'accessories'];
getLastElement(array);
console.log('value of getLastElement:', array[array.length - 1]);
