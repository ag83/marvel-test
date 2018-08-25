import React, { Component } from 'react';
import { connect } from 'react-redux';

import heroesRequest from './actions';


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
  heroes: state.heroes
});

const mapDispatchToProps = dispatch => ({
  getHeroes: () =>
    dispatch(heroesRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroesPage);
