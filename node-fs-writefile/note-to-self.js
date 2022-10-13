const fs = require('fs');
const note = process.argv[2] + '\n';

fs.writeFile('note.txt', note, 'utf8', err => {
  if (err) { // on in line, this code works also: throw err;
    console.error(err);
    process.exit(1);
  }
});
