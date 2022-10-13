const fs = require('fs');

fs.readFile('dijkstra.txt', 'utf8', (err, data) => {
  if (err) { // on in line, this code works also: throw err;
    console.error(err);
    process.exit(1);
  }
  console.log(data);
});
