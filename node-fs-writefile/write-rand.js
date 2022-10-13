const fs = require('fs');
const int = Math.floor(Math.random() * 100) + '\n';

fs.writeFile('random.txt', int, 'utf8', err => {
  if (err) { // on in line, this code works also: throw err;
    console.error(err);
    process.exit(1);
  }
});
