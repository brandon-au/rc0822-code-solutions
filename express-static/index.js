const express = require('express');
const path = require('node:path');

const app = express();

const publicPath = path.join('__dirname', 'public');
console.log('publicPath:', publicPath);

app.use(express.static('public'));

app.listen(3000, () => {
});
