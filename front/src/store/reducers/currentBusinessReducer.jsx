import TYPES from "store/types"

const initialState = null

function currentBusinessReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.CURRENT_BUSINESS_CHANGE:
      return action.payload
    default:
      return state
  }
}

export default currentBusinessReducer
