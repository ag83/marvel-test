import React, { Component } from 'react';
import { connect } from 'react-redux';

import registerRequest from './actions';
import RegisterForm from './components/RegisterForm';

import './styles.pcss';

class RegisterPage extends Component {
  render() {
    return (
      <div className="mv-container mv-container--centered">
        <RegisterForm registerUser={this.props.register} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  register: state.registerReducer
});

const mapDispatchToProps = dispatch => ({
  register: (user) => { dispatch(registerRequest(user)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
