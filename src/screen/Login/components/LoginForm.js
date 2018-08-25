import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null
    };
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;


    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState({ email: event.target.value })}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState({ password: event.target.value })}
          type="password"
          placeholder="Password"
        />
        <button type="submit">
          Login
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default LoginForm;
