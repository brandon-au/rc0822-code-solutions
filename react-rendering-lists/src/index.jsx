import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

// function PokedexList(props) {
//   const
// }
// render() {
//   return (
// <ul>{pokedex}</ul>
const pokedexList = pokedex.map(pokedex =>
  <li key={pokedex.number}>{ pokedex.name }</li>
);
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ul>{pokedexList}</ul>);
