import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loginRequest, loginSocial } from './actions';
import LoginForm from './components/LoginForm';

import './login.pcss';

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
  //logged: state.login.logged
});

const mapDispatchToProps = dispatch => ({
  loginUser: user =>
    dispatch(loginRequest(user)),
  loginSocial: type =>
    dispatch(loginSocial(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);


LoginPage.propTypes = {
  loginUser: PropTypes.func,
  loginSocial: PropTypes.func
};

