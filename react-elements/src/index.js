import React from 'react';
import * as ReactDOM from 'react-dom';

const reactElement = React.createElement( // creates and returns a react element
  'h1', // element type
  [null],
  ['Hello, React!'] // what goes in element
);

console.log(`React: ${reactElement}`);

const container = document.querySelector('#root'); // query id from HTML

// creates starting point for queried container above
const root = ReactDOM.createRoot(container);

root.render(reactElement); // renders the element onto root to view in browser
