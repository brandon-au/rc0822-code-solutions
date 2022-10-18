const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => { // not a real location or file path,
  // way to define a path to do a specific task - acts as a label
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]); // pushes grades into empty array
  }
  res.json(gradesArray); // parases array as json file so it can be read
});

app.listen(3000, () => { // app.listen should usually go at the end of file
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

// code before Q&A

// app.get('/api/grades', (req, res) => {
//   for (const property in grades) {
//     res.json({ property });
//   }
// });

// app.listen(3000, () => {
//   console.log('Listening on port 3000!');
// });
