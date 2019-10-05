import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Front from '../front/index';
import Login from '../../views/login/index';
import NotFound from '../../views/404/index';

const Router = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => <Redirect to="/front"></Redirect>}
    >
    </Route>
    <Route
      component={Login}
      path="/login"
    >
    </Route>
    <Route
      component={Front}
      path="/front"
    >
    </Route>
    <Route
      component={NotFound}
      path="/404"
    >
    </Route>
  </Switch>
);

export default Router;