import React from 'react';
import ReactDOM from 'react-dom/client';

// before q&A
// --
// class CustomButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleFalseClick = this.handleFalseClick.bind(this);
//     this.handleTrueClick = this.handleTrueClick.bind(this);
//     this.state = { isClicked: false };
//   }

//   handleFalseClick() {
//     this.setState({isClicked:false});
//   }

//   handleTrueClick() {
//     this.setState({isClicked:true});
//   }

//   render() {
//   }
//   return (
// <button>
// </button>
// }

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
    // IMPORTANT - if you're making event listeners, need to bind this or this will be undefined
  }

  handleClick() {
    this.setState({ isClicked: true }); // every time setState is called, render will be called
    // setState is asynchronous, can't use state right after calling it
    // DO NOT use state right after setting it, will never work correctly
  }

  render() {
  // console.log state from render method if you want to see its latest form
  // state changes and page will re-render based on what happens in render method
    if (this.state.isClicked) {
      return <button>Thanks!</button>;
    }
    return <button onClick={this.handleClick}>Click Me!</button>;
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
