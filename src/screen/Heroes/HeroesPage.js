import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import heroesRequest from './actions';
import Header from '../Common/components/Header';
import Heroes from './components/Heroes';
import { logoutRequest } from '../Login/actions';

import './heroes.pcss';

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

HeroesPage.propTypes = {
  getHeroes: PropTypes.func,
  logout: PropTypes.func,
  user: PropTypes.object,
  heroes: PropTypes.shape({
    heroes: PropTypes.array,
    totalHeroes: PropTypes.number,
    params: PropTypes.shape({
      offset: PropTypes.number,
      limit: PropTypes.number
    })
  })
};

