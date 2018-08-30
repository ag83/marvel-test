import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import registerRequest from './actions';
import RegisterForm from './components/RegisterForm';

import './register.pcss';

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
  //
});

const mapDispatchToProps = dispatch => ({
  register: (user) => { dispatch(registerRequest(user)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);

RegisterPage.propTypes = {
  register: PropTypes.func
};

