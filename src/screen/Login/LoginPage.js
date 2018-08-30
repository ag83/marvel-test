import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginRequest, loginSocial } from './actions';
import LoginForm from './components/LoginForm';

import './styles.pcss';

class LoginPage extends Component {
  render() {
    return (
      <div className="mv-container mv-container--centered">
        <LoginForm
          loginSocial={this.props.loginSocial}
          loginUser={this.props.loginUser}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch => ({
  loginUser: user =>
    dispatch(loginRequest(user)),
  loginSocial: type =>
    dispatch(loginSocial(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
