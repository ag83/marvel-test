import React, { Component } from 'react';
import { connect } from 'react-redux';

import loginRequest from './actions';
import LoginForm from './components/LoginForm';


class LoginPage extends Component {
  render() {
    return (
      <LoginForm />
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch => ({
  login: () =>
    dispatch(loginRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
