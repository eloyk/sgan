import TYPES from "store/types"

export function currentUserChange(payload) {
  return {
    type: TYPES.CURRENT_USER_CHANGE,
    payload: payload
  }
}
