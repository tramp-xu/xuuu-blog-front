import React, { Component } from 'react';
import NavMenu from './Menu';
import User from '../../components/user/index';
import { Wrapper } from './style';

export default class Navbar extends Component {

  public render() {
    return (
      <Wrapper>
        <div className="nav-menu">
          <NavMenu />
        </div>
        <div className="user">
          <User />
        </div>
      </Wrapper>
    );
  }
}
