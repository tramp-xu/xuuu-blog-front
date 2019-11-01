import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';


export interface NState {
  current: string
}

export default class NavMenu extends Component <{}, NState> {
  public state: NState = {
    current: 'articles'
  }

  public handleClick = (e:any):void => {
    this.setState({
      current: e.key
    });
  }
  public render() {
    return (
      <Menu
        mode="horizontal"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
      >
        <Menu.Item key="article">
          <Link to="/front/article">文 章</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/front/about">关于我</Link>
        </Menu.Item>
        <Menu.Item key="resume">
          <Link to="/front/resume">简 历</Link>
        </Menu.Item>
        <Menu.Item key="editor">
          <Link to="/admin/editor">编 辑</Link>
        </Menu.Item>
        <Menu.Item key="todo">
          <Link to="/front/todo">Todo</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
