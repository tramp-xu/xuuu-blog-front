import * as React from 'react';
import TodoItem from "./TodoItem";
import { ITodoItem } from "../todo";
import { Button, Input } from 'antd'
import { Wrapper } from './style.js'

import { connect } from 'react-redux'
import { addTodo } from "../../../store/todo/actions";
import { AppState } from "../../../store/index"

export interface IProps {
  record: ITodoItem[]
  addTodo: any
}

export interface IStates {
  record: ITodoItem[],
  taskName: string
}

class TodoList extends React.Component<IProps, IStates> {

  public state = {
    record: [...this.props.record],
    taskName: ''
  }

  public confirmDelete = (index: number): void => {
    let record = [...this.state.record]
    record.splice(index, 1)
    this.setState({
      record
    })
  }

  public render() {
    const {changeTaskName, addTask} = this
    const {taskName, record} = this.state
    return (
      <Wrapper>
        <div className="add-row">
          <Input 
            value={taskName}
            onChange={changeTaskName}
          ></Input>
          <Button type='primary' onClick={addTask} disabled={taskName ? false : true}>添加任务</Button>
        </div>
        {this._renderList(record)}
      </Wrapper>
    );
  }

  private _renderList = (record: Array<ITodoItem>) => {
    if (record.length) {
      return record.map((item, index) => {
        return (
          <TodoItem confirmDelete={this.confirmDelete} key={index} index={index} title={item.title}></TodoItem>
        )
      })
    } else {
      return (<div className="no-data">no data list</div>)
    }
  }

  private addTask = ():void =>  {
    let {record, taskName} = this.state
    this.props.addTodo(taskName)
    let task = {
      title: taskName
    }
    record.push(task)
    this.setState({
      record: record,
      taskName: ''
    })
  }

  private changeTaskName = (e: any): void => {
    const {value} = e.target
    this.setState({
      taskName: value
    })
  }
}

const mapDispatchToProps = (dispatch:any) => ({
  addTodo: (text:string) => dispatch(addTodo(text))
})

const mapStateToProps = (state:AppState) => ({
  todos: state.todos
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)