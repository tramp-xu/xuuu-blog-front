import { ADD_TODO, TOGGLE_TODO, TodoActionTypes, TodoState, Todo, SHOW_ALL } from "./type";
// import { combineReducers } from "redux";
const initalState: TodoState = {
  todos: [],
  filter: SHOW_ALL
}

export const todoReducer = (
  state = initalState,
  action: TodoActionTypes
) : TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
        filter: state.filter
      }
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo:Todo) => {
          return todo.id === action.meta.id ? { ...todo, completed: !todo.completed } : todo
        }),
        filter: state.filter
      }
    default:
      return state
  }
}

// const visibilityFilter = (state = initalState, action: TodoActionTypes) : TodoState => {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return {
//         todos: [...state.todos],
//         filter: action.meta.filter
//       }
//     default:
//       return state
//   }
// }

// export const todoReducer = combineReducers({
//   todoApp,
//   visibilityFilter
// })

