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
export const HERO = 'hero/:id';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (loginCheck() ? <Component {...props} /> : <Redirect to={LOGIN} />)}
    />
  );
}

export default function router() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          exact
          path={HOME}
          render={props =>
              (loginCheck() ? (
                <Redirect to={HEROES} {...props} />
              ) : (
                <Redirect to={LOGIN} {...props} />
              ))
            }
        />
        <Route
          exact
          path={LOGIN}
          render={props =>
            (loginCheck() ? (
              <Redirect to={HEROES} {...props} />
            ) : (
              <LoginPage {...props} />
            ))
          }
        />
        <Route exact path={LOGIN} component={LoginPage} />
        <Route exact path={REGISTER} component={RegisterPage} />
        <PrivateRoute exact path={HEROES} component={HeroesPage} />
        <PrivateRoute exact path={HERO} component={HeroPage} />
        <Redirect from="/*" to="/" />
      </Switch>
    </ConnectedRouter>
  );
}
