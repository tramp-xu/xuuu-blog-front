export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'

type FilterType = typeof SHOW_ALL | typeof SHOW_COMPLETED | typeof SHOW_ACTIVE

export interface Todo {
  id: number
  text: string
  completed: boolean
}

export interface TodoState {
  todos: Todo[]
  filter: string
}

interface AddTodoAction {
  type: typeof ADD_TODO
  payload: Todo
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO
  meta: {
    id: number
  }
}

interface FilterTodoAction {
  type: typeof SET_VISIBILITY_FILTER
  meta: {
    filter: FilterType
  }
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction | FilterTodoAction