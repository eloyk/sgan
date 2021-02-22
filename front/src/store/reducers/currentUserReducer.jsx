import TYPES from "store/types"

const initialState = null

function currentUserChange(state = initialState, action) {
  switch (action.type) {
    case TYPES.CURRENT_USER_CHANGE:
      return action.payload
    default:
      return state
  }
}

export default currentUserChange
