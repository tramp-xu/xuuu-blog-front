import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../navbar/index';
import Editor from '../../views/editor/index';



export interface FProps {
  match: any
}
class Front extends Component<FProps>{
  public render (){
    let { match } = this.props;
    return (
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route
            exact
            path={match.path}
            render={() => <Redirect to={`${match.path}/editor`}></Redirect>}
          ></Route>
          <Route
            component={Editor}
            path={`${match.path}/editor`}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default Front;