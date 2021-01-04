import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initStore } from './store';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import MainRoutes from './Components';
import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css';
import './index.css';
import './Components/App/App.css'

ReactDOM.render(
  <Provider store={initStore()}>
    <Router>
      <MainRoutes />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
