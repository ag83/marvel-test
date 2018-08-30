import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history } from './store';
import { loginCheck } from './firebase/auth';
import HeroesPage from './screen/Heroes/HeroesPage';
import HeroPage from './screen/Hero/HeroPage';
import LoginPage from './screen/Login/LoginPage';
import RegisterPage from './screen/Register/RegisterPage';

export const LOGIN = '/login';
export const REGISTER = '/register';
export const HOME = '/';
export const HEROES = '/heroes';
export const HERO = '/hero';

function LoggedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (loginCheck() ? <Component {...props} /> : <Redirect to={LOGIN} />)}
    />
  );
}

function LogoutRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (loginCheck() ? <Redirect to={HEROES} /> : <Component {...props} />)}
    />
  );
}

export default function router() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <LogoutRoute exact path={LOGIN} component={LoginPage} />
        <LogoutRoute exact path={REGISTER} component={RegisterPage} />
        <LoggedRoute exact path={HOME} component={HeroesPage} />
        <LoggedRoute exact path={HEROES} component={HeroesPage} />
        <LoggedRoute path={`${HERO}/:id`} component={HeroPage} />
        <Redirect from="/*" to={HOME} />
      </Switch>
    </ConnectedRouter>
  );
}
