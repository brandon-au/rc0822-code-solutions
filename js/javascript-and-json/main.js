var array = [
  {
    isbn: '9781608840861',
    title: 'Cirque Dy Freak',
    author: 'Darren Shan'
  },
  {
    isbn: '9780552577991',
    title: 'Edge Chronicles',
    author: 'Paul Stewart'
  },
  {
    isbn: '9780786838653',
    title: 'Percy Jackson',
    author: 'Rick Riordan'
  }
];
console.log('value of array:', array);
console.log('typeof array:', typeof array);

var jsonArray = JSON.stringify(array);
console.log('value of JSON array:', jsonArray);
console.log('typeof JSON array:', typeof jsonArray);

var student = '{"studentName": "Brandon", "numberID": "2381"}';
console.log('value of student:', student);
console.log('typeof student:', typeof student);

var parseStudent = JSON.parse(student);
console.log('value of parseStudent:', parseStudent);
console.log('typeof parseStudent:', typeof parseStudent);
