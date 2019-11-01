import { SystemActionTypes, SystemState, UPDATE_SESSION } from "./types";

const initalState: SystemState = {
  loggedIn: false,
  session: '',
  userName: ''
}

export function systemReducer (
  state = initalState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      }
    }
    default: {
      return state
    }
  }
}