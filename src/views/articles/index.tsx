import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ArticleList from './list';
import ArticleDetail from './detail';

export interface FProps {
  match: any
}

export default function ArticleRouter(props: FProps) {
  let {match} = props;
  return (
    <Switch>
      <Route
        exact
        path={match.path}
        render={() => <Redirect to={`${match.path}/list`}></Redirect>}
      ></Route>
      <Route
        component={ArticleList}
        path={`${match.path}/list`}
      ></Route>
      <Route
        component={ArticleDetail}
        path={`${match.path}/detail/:id`}
      ></Route>
    </Switch>
  );
}
