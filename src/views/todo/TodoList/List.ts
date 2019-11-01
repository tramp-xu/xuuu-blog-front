import { connect } from 'react-redux'
import { addTodo } from "../../../store/todo/actions";
import TodoList from './index'
import { AppState } from "../../../store/index"


const mapDispatchToProps = ( state: any, dispatch:any) => ({
  addTodo: (text:string) => dispatch(addTodo(text))
})

const mapStateToProps = (state:any) => ({
  todos: state.todos
})

export default connect(
  mapDispatchToProps,
  mapStateToProps
)(TodoList)