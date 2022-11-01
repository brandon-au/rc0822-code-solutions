import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0, colorIndex: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { clickCount } = this.state;
    this.setState({ clickCount: clickCount + 1 });
    if (clickCount % 3 === 0) {
      this.setState({ colorIndex: clickCount / 3 });
    }
  }

  render() {
    const { colorIndex } = this.state;
    const buttonColor = [
      'black', 'indigo', 'darkviolet', 'coral', 'lightcoral', 'yellow', 'white'
    ];
    const textColor = [
      'white', 'white', 'white', 'white', 'black', 'black', 'black'
    ];
    return (
      <button style={{
        backgroundColor: buttonColor[colorIndex],
        color: textColor[colorIndex],
        border: 'solid black 1px',
        padding: '15px 32px',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        boxShadow: '5px 5px 1px #00000f'
      }}
      onClick={ this.handleClick }>
      Hot Button
      </button>
    );
  }
}
