import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginRequest } from './actions';
import LoginForm from './components/LoginForm';

import './styles.pcss';

class LoginPage extends Component {
  render() {
    return (
      <div className="mv-container mv-container--centered">
        <LoginForm loginUser={this.props.loginUser} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginRequest(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
