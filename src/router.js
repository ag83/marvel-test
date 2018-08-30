import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import loadable from 'react-loadable';

import { history } from './store';
import Loading from './screen/Common/components/Loading';
import { loginCheck } from './firebase/auth';

const AsyncHeroesPage = loadable({
  loader: () => import('./screen/Heroes/HeroesPage'),
  loading: ({ isLoading }) => (<Loading loading={isLoading} />)
});
const AsyncHeroPage = loadable({
  loader: () => import('./screen/Hero/HeroPage'),
  loading: ({ isLoading }) => (<Loading loading={isLoading} />)
});
const AsyncLoginPage = loadable({
  loader: () => import('./screen/Login/LoginPage'),
  loading: ({ isLoading }) => (<Loading loading={isLoading} />)
});
const AsyncRegisterPage = loadable({
  loader: () => import('./screen/Register/RegisterPage'),
  loading: ({ isLoading }) => (<Loading loading={isLoading} />)
});

export const LOGIN = process.env.PUBLIC_URL + '/login';
export const REGISTER = process.env.PUBLIC_URL + '/register';
export const HOME = process.env.PUBLIC_URL + '/';
export const HEROES = process.env.PUBLIC_URL + '/heroes';
export const HERO = process.env.PUBLIC_URL + '/hero';

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
        <LogoutRoute exact path={LOGIN} component={AsyncLoginPage} />
        <LogoutRoute exact path={REGISTER} component={AsyncRegisterPage} />
        <LoggedRoute exact path={HOME} component={AsyncHeroesPage} />
        <LoggedRoute exact path={HEROES} component={AsyncHeroesPage} />
        <LoggedRoute path={`${HERO}/:id`} component={AsyncHeroPage} />
        <Redirect from="/*" to={HOME} />
      </Switch>
    </ConnectedRouter>
  );
}
