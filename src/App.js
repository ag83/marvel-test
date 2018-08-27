import React, { Component } from 'react';
import { connect } from 'react-redux';

import router from './router';
import Loading from './screen/Common/components/Loading';
import Alert from './screen/Common/components/Alert';
import auth from './firebase/firebase';
import { loginRestore, logoutRestore } from './screen/Login/actions';

import './App.pcss';

class AppContainer extends Component {
  componentDidMount() {
    this.setAuthObserver();
  }

  setAuthObserver() {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.restore(user);
      } else if (!user && this.props.logged) {
        this.props.forceLogout();
      }
    });
  }

  render() {
    return (
      <div>
        {router()}
        <Loading loading={this.props.loading} />
        <Alert messages={this.props.messages} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.common.loading,
    logged: state.login.logged,
    messages: state.common.messages,
  };
}

const mapDispatchToProps = dispatch => ({
  restore: user => dispatch(loginRestore(user)),
  forceLogout: () => dispatch(logoutRestore())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
