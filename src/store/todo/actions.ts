import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "./type";

let nextTodoId = 0
export const addTodo = (text:string) => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    text,
    completed: false
  }
  
})

export const setVisibilityFilter = (filter:any) => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = (id:number) => ({
  type: TOGGLE_TODO,
  meta: {
    id
  }
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}