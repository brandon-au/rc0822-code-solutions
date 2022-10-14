var student = {
  firstName: 'Brandon',
  lastName: 'Au',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName;', fullName);
console.log('typeof fullName:', typeof fullName);

student.livesInIrvine = false;
student.previousOccupation = 'designer';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('typeof livesInIrvine:', typeof student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('typeof previousOccupation:', typeof student.previousOccupation);

console.log('value of student:', student);

var vehicle = {
  make: 'Porsche',
  model: 911,
  year: 2022
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;

console.log('value of vehicle', vehicle);

var pet = {
  name: 'bear',
  type: 'corgi'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
