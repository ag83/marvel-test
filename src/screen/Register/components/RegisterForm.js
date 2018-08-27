import React, { Component } from 'react';
import reduxForm from 'redux-form/es/reduxForm';
import Field from 'redux-form/es/Field';
import { Link } from 'react-router-dom';

import inputWithValidation from '../../Common/components/inputWithValidation';
import { LOGIN } from '../../../router';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.registerUser = this.registerUser.bind(this);
  }

  registerUser(values) {
    this.props.registerUser({
      email: values.Email,
      password: values.PasswordOne
    });
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.registerUser)} autoComplete="off" className="mv-register__container">
        <h2 className="mv-register__header">REGISTER</h2>
        <div className="mv-register__input-group">
          <label htmlFor="Email" className="mv-register__label">
            Email
          </label>
          <Field
            component={inputWithValidation}
            className="mv-register__form-input"
            placeholder="Email"
            name="Email"
            type="text"
            wrapperClass="mv-register__form-input-wrapper"
          />
        </div>
        <div className="mv-register__input-group">
          <label htmlFor="PasswordOne" className="mv-register__label">
            Password
          </label>
          <Field
            component={inputWithValidation}
            className="mv-register__form-input"
            placeholder="Password"
            name="PasswordOne"
            type="password"
            wrapperClass="mv-register__form-input-wrapper"
          />
        </div>
        <div className="mv-register__input-group">
          <label htmlFor="PasswordTwo" className="mv-register__label">
            Confirm Password
          </label>
          <Field
            component={inputWithValidation}
            className="mv-register__form-input"
            placeholder="Confirm Password"
            name="PasswordTwo"
            type="password"
            wrapperClass="mv-register__form-input-wrapper"
          />
        </div>
        <button type="submit" className="mv-register__form-submit" disabled={this.props.invalid || this.props.submitting || this.props.pristine} >
          Register
        </button>
        <Link href={`/${LOGIN}`} to={LOGIN} className="mv-register__link" >Login page</Link>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.PasswordOne) {
    errors.PasswordOne = 'Please enter a password';
  } else if (formProps.PasswordOne.length < 6) {
    errors.PasswordOne = 'Password length must be at least 6 characters in length';
  }

  if (!formProps.PasswordTwo) {
    errors.PasswordTwo = 'Please repeat a password';
  } else if (formProps.PasswordTwo.length < 6) {
    errors.PasswordOne = 'Password length must be at least 6 characters in length';
  }

  if (formProps.PasswordOne && formProps.PasswordTwo && formProps.PasswordOne !== formProps.PasswordTwo) {
    errors.PasswordTwo = 'Passwords must be the same';
  }

  if (!formProps.Email) {
    errors.Email = 'Please enter a email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.Email)) {
    errors.Email = 'Invalid email address';
  }
  return errors;
}

const registerFormed = reduxForm({
  form: 'RegisterForm',
  validate
})(RegisterForm);

export default registerFormed;

