/* exported getStudentNames */
// function with 1 parameter - var array with objects, each with name key
// go through the array and checking keys of each object
// assign those keys to a new defined variable
// return new variable so it only gives the keys

function getStudentNames(students) { // function being defined with parameter - students is object
  var student = []; // empty array being assigned to variable
  for (var i = 0; i < students.length; i++) {
    student[i] = students[i].name; // student array at position i is being assigned the name values in students array at position i
  }
  return student;
}

// var input = [
// { name: 'Robert' },
// { name: 'Steve' },
// { name: 'Ken' }
// ]; // each 'thing' inside array is an object, just with one key-value pair
// // function needs to pull the value from the 'name' property in each object
// // looping through array to get access to each object
// // at the object, get access to the specified information (name property from students[i].name)
