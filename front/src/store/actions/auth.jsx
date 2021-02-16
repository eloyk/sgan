import TYPES from "store/types"

import AuthService from "../../services/auth.service";

export const register = (email, password) => (dispatch) => {
  return AuthService.register(email, password).then(
    (response) => {
      dispatch({
        type: TYPES.REGISTER_SUCCESS,
        payload: response.data,
      });

      dispatch({
        type: TYPES.SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.errores &&
          error.response.errores.mensaje) ||
        error.mensaje ||
        error.toString();

      dispatch({
        type: TYPES.REGISTER_FAIL,
      });

      dispatch({
        type: TYPES.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};