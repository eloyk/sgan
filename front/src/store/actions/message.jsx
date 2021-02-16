import TYPES from "store/types"

export const setMessage = (message) => ({
  type: type.SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: type.CLEAR_MESSAGE,
});