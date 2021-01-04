import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import App from './../Containers/App';
// import { Login } from '../Containers';

const MainRoutes = () => (
  <Router>
    <Switch>
      {/* <Route path="/login" component={Login} /> */}
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

export default MainRoutes;
