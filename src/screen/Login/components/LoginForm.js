import React, { Component } from 'react';
import reduxForm from 'redux-form/es/reduxForm';
import Field from 'redux-form/es/Field';

import inputWithValidation from '../../Common/components/inputWithValidation';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(values) {
    this.props.loginUser({
      email: values.Login,
      password: values.Password
    });
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.loginUser)} autoComplete="off" className="mv-login__container">
        <h2 className="mv-login__header">LOGIN</h2>
        <div className="mv-login__input-group">
          <label htmlFor="Login" className="mv-login__label">
            Login email
          </label>
          <Field
            component={inputWithValidation}
            className="mv-login__form-input"
            placeholder="Login"
            name="Login"
            type="text"
            wrapperClass="mv-login__form-input-wrapper"
          />
        </div>
        <div className="mv-login__input-group">
          <label htmlFor="Password" className="mv-login__label">
            Password
          </label>
          <Field
            component={inputWithValidation}
            className="mv-login__form-input"
            placeholder="Password"
            name="Password"
            type="password"
            wrapperClass="mv-login__form-input-wrapper"
          />
        </div>
        <button type="submit" className="mv-login__form-submit" disabled={this.props.invalid || this.props.submitting || this.props.pristine} >
          Login
        </button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.Password) {
    errors.Password = 'Please enter a password';
  }

  if (!formProps.Login) {
    errors.Login = 'Please enter a login email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.Login)) {
    errors.Login = 'Invalid email address';
  }
  return errors;
}

const loginFormed = reduxForm({
  form: 'LoginForm',
  validate
})(LoginForm);

export default loginFormed;

