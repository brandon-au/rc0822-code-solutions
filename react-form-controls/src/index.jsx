import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(username) {
    this.setState({ username: username.target.value });
  }

  handlePasswordChange(password) {
    this.setState({ password: password.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('RegistrationForm state:', this.state);
  }

  render() {
    return (
      <form onSubmit = { this.handleSubmit }>
        <label>
          Username:
        </label>
        <input type="text" value={this.state.username} onChange={ this.handleUsernameChange } />
        <label>
          Password:
        </label>
        <input type="password" value={ this.state.password } onChange={ this.handlePasswordChange } />
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RegistrationForm />);
