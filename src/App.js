import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import router from './router';
import Loading from './screen/Common/components/Loading';
import Alert from './screen/Common/components/Alert';
import { auth } from './firebase/firebase';
import { loginRestore, logoutRestore } from './screen/Login/actions';
import { setUser } from './screen/User/actions';

import './App.pcss';

class AppContainer extends Component {
  componentDidMount() {
    this.setAuthObserver();
  }

  setAuthObserver() {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.restore(user);
      } else if (user === null && this.props.logged) {
        this.props.forceLogout();
      } else {
        this.props.setUser(user);
      }
    });
  }

  render() {
    return (
      <Fragment>
        {
          this.props.user === undefined ? (<Loading loading />) : router()
        }
        <Loading loading={this.props.loading} />
        <Alert messages={this.props.messages} />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.common.loading,
    logged: state.login.logged,
    user: state.user.user,
    messages: state.common.messages,
  };
}

const mapDispatchToProps = dispatch => ({
  restore: user =>
    dispatch(loginRestore(user)),
  forceLogout: () =>
    dispatch(logoutRestore()),
  setUser: user =>
    dispatch(setUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

AppContainer.propTypes = {
  restore: PropTypes.func,
  forceLogout: PropTypes.func,
  setUser: PropTypes.func,
  loading: PropTypes.bool,
  logged: PropTypes.bool,
  user: PropTypes.object,
  messages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string
  }))
};
