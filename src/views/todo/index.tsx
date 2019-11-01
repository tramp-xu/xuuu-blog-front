import * as React from 'react';
import TodoList from "./TodoList/index";
import { ITodoItem } from "./todo";
import { Wapper } from './style'

export interface IHomeState {
  record: ITodoItem[] | any
}

const record: any = [
  {title: 'ddsds', keyword: 'dddd'}
]

export default class Home extends React.Component<{}, IHomeState> {

  public state = {
    record: record
  }

  public render() {
    return (
      <Wapper>
        <TodoList record={record}></TodoList>
      </Wapper>
    );
  }
}
