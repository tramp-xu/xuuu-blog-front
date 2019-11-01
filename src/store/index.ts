import { chatReducer } from './chat/reducers'
import { systemReducer } from "./system/reducers";
import { todoReducer } from "./todo/reducers";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer,
  todos: todoReducer
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer