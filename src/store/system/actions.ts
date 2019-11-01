import { UPDATE_SESSION, SystemState } from "./types";

export function updateSession(newSession: SystemState) {
  return {
    type: UPDATE_SESSION,
    payload: newSession
  }
}