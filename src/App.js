import React, { Component } from 'react';
import { connect } from 'react-redux';

import router from './router';
import Loading from './screen/Common/components/Loading';
import Alert from './screen/Common/components/Alert';

import './App.pcss';

class AppContainer extends Component {
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
    messages: state.common.messages,
  };
}

export default connect(mapStateToProps)(AppContainer);
