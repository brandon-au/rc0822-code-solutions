import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton(props) {
  return <button>Click Me!</button>;
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const element = <CustomButton />;
root.render(element);

// root.render(<CustomButton />); // this line can replace lines 10+11

// function CustomButton(props) {
//   return <button>Click Me!</button>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <CustomButton />;
// root.render(element);
