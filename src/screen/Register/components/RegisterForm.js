import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null
    };
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;


    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.setState({ username: event.target.value })}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event => this.setState({ email: event.target.value })}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event => this.setState({ passwordOne: event.target.value })}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState({ passwordTwo: event.target.value })}
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit">
          Register
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.UserName) {
    errors.UserName = 'Please enter a user name';
  }

  if (!formProps.PasswordOne) {
    errors.Password = 'Please enter a password';
  } else if (formProps.Password.length < 6) {
    errors.PasswordOne = 'Password length must be at least 6 characters in length';
  }

  if (!formProps.PasswordTwo) {
    errors.PasswordTwo = 'Please repeat a password';
  }

  if (formProps.PasswordOne && formProps.PasswordTwo && formProps.PasswordOne !== formProps.PasswordTwo) {
    errors.PasswordTwo = 'Passwords must be the same';
  }

  if (!formProps.Mail) {
    errors.Mail = 'Please enter a email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.Mail)) {
    errors.Mail = 'Invalid email address';
  }

  return errors;
}

const registerFormed = reduxForm({
  form: 'RegisterForm',
  validate
})(RegisterForm);

export default registerFormed;

