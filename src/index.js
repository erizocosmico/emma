require('babel/polyfill');
require('es6-promise').polyfill();
require('isomorphic-fetch');

import React from 'react';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

React.render((
  <Provider store={store}>
    {() => <App />}
  </Provider>
), document.body);
