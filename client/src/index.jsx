import React from 'react';
import ReactDOM from 'react-dom';

import configStore from '@/redux/store/configStore';
import { Provider } from 'react-redux';
import AppRouter from '@/components/router'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import App from './app.jsx'
// import Route from '@/components/route'

const store = configStore;

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <AppRouter />
    </Router>
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();
