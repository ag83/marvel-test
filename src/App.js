import React, { Component } from 'react';
import { Provider } from 'react-redux';


import store from './store';
import router from './router';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {router()}
      </Provider>
    );
  }
}
