import React from 'react';

import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Home from './screens/Home';
import { history } from './store';

export default function router() {
  return (
    <ConnectedRouter history={history}>
      <Route exact path="/" component={Home} />
    </ConnectedRouter>
  );
}
