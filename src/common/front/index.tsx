import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../navbar/index';
import Articles from '../../views/articles/index';
import About from '../../views/about/index';
import Resume from '../../views/resume/index';
import Todo from '../../views/todo/index';
import Tag from '../../views/tag/index';
import User from '../../views/user/index';
import Editor from '../../views/editor/index';


export interface FProps {
  match: any
}
class Front extends Component<FProps>{

  // public componentDidMount () {
  //   let source = new EventSource('http://192.168.137.1:8080/api/message/get')
  //   source.onopen = (event) => {
  //     console.log('成功连接服务器')
  //   }

  //   source.onmessage = (event) => {
  //     console.log('未命名事件')
  //     console.log(event.data)
  //   }
  // }

  public render (){
    let { match } = this.props;
    return (
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route
            exact
            path={match.path}
            render={() => <Redirect to={`${match.path}/article`}></Redirect>}
          ></Route>
          <Route
            component={Articles}
            path={`${match.path}/article`}
          ></Route>
          <Route
            component={About}
            path={`${match.path}/about`}
          ></Route>
          <Route
            component={Resume}
            path={`${match.path}/resume`}
          ></Route>
          <Route
            component={Todo}
            path={`${match.path}/todo`}
          ></Route>
          <Route
            component={Editor}
            path={`${match.path}/editor`}
          ></Route>
          <Route
            component={Tag}
            path={`${match.path}/tag`}
          ></Route>
          <Route
            component={User}
            path={`${match.path}/user`}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default Front;