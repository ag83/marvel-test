import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import heroesRequest from './actions';
import Header from '../Common/components/Header';
import Heroes from './components/Heroes';
import { logoutRequest } from '../Login/actions';

class HeroesPage extends Component {
  render() {
    return (
      <Fragment>
        <Header {...this.props.user} logoutUser={this.props.logout} />
        <Heroes getHeroes={this.props.getHeroes} {...this.props.heroes} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  heroes: state.heroes,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getHeroes: param =>
    dispatch(heroesRequest(param)),
  logout: () =>
    dispatch(logoutRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroesPage);
