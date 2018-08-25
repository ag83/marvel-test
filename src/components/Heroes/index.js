import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Button, Table } from 'semantic-ui-react';

import { getUsersSaga } from '../../actions';

//import styles from './styles';

class HeroesPage extends Component {
  render() {
    return (
      <div>
        Heroes
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

export default connect(mapStateToProps, mapDispatchToProps)(HeroesPage);
