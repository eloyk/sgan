import TYPES from "store/types"

const initialState = {}

 function messageReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.SET_MESSAGE:
      return { message: payload };

    case TYPES.CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}

export default messageReducer
