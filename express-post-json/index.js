const express = require('express');
const app = express();

const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

express.json();
app.use(express.json());

// app.post('/api/grades/', (req, res) => {
//   Object.assign(grades, req.body);
// });

let nextId = 1;
app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  // post method is called, parsing the data into an object (req.body) and
  // assigns it to new grade
  const id = nextId;
  // nextId is assigned to id to increment later
  newGrade.id = id;
  // id property of newGrade object is assigned const id Value
  grades[id] = newGrade;
  // data passed into newGrade is assigned to empty grades object
  nextId++;
  // nextId is incremented so each new submission gets a new id
  res.status(201).json(grades[id]);
  // sends status code and json of newGrade set equal to req.body
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
