import React, { Component } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
// import Articles from '../../views/articles/index';
import Navbar from '../navbar/index';

export default class Layout extends Component {
  public render (){
    // let { match } = this.props;
    return (
      <div>
        <Navbar></Navbar>
        {/* <Switch>
          <Route
            exact
            path={match.path}
            render={() => <Redirect to={`${match.path}/articles`}></Redirect>}
          ></Route>
          <Route
            component={Articles}
            path={`${match.path}/articles`}
          ></Route>
        </Switch> */}
      </div>
    );
  }
}
