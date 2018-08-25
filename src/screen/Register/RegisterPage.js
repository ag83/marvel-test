import React, { Component } from 'react';
import { connect } from 'react-redux';

import registerRequest from './actions';
import RegisterForm from './components/RegisterForm';

class RegisterPage extends Component {
  render() {
    return (
      <RegisterForm registerRequest={this.props.registerRequest} />
    );
  }
}

const mapStateToProps = state => ({
  register: state.registerReducer
});

const mapDispatchToProps = dispatch => ({
  register: () =>
    dispatch(registerRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
