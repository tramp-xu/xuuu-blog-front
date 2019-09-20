import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Front from '../front/index';
import Login from '../../views/login/index';

const Router = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={()=><Redirect to="/front"></Redirect>}
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
  </Switch>
);

export default Router;