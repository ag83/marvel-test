import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Button, Table } from 'semantic-ui-react';

import { getUsersSaga } from '../../actions';

//import styles from './styles';

class HeroPage extends Component {
  render() {
    return (
      <div>
        Hero
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersReducer.users
});

const mapDispatchToProps = dispatch => ({
  getUsersSaga: () =>
    dispatch(getUsersSaga())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroPage);
