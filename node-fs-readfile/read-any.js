const fs = require('fs');

const file = process.argv[2];

fs.readFile(file, 'utf8', (err, data) => {
  if (err) { // on in line, this code works also: throw err;
    // throw statement is a hard return, stops execution on line and show error in console
    console.error(err);
    process.exit(1);
  }
  console.log(data);
});
