import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Button, Table } from 'semantic-ui-react';

import { getHero } from './actions';

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
  hero: state.hero
});

const mapDispatchToProps = dispatch => ({
  getHero: () =>
    dispatch(getHero())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroPage);
