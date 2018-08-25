import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history } from './store';
import HeroesPage from './components/Heroes';
import HeroPage from './components/Hero';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';

export const LOGIN = '/login';
export const REGISTER = '/register';
export const HOME = '/';
export const HEROES = '/heroes';
export const HERO = 'hero/:id';

export default function router() {
  return (
    <ConnectedRouter history={history}>
      <Fragment>
        <Route exact path={LOGIN} component={LoginPage} />
        <Route exact path={REGISTER} component={RegisterPage} />
        <Route exact path={HOME} component={HeroesPage} />
        <Route exact path={HEROES} component={HeroesPage} />
        <Route exact path={HERO} component={HeroPage} />
      </Fragment>
    </ConnectedRouter>
  );
}
