import TYPES from "store/types"
import authMethod from "../../services/auth.service"

const user = authMethod.currenUser();

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

 function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user
      };
    case TYPES.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case TYPES.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case TYPES.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}

export default authReducer