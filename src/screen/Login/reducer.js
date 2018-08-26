export const LOGIN_REQUESTING = 'LOGIN_REQUESTING';
export const LOGOUT_REQUESTING = 'LOGOUT_REQUESTING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const initialState = {
  logged: false
};

const reducer = function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return { ...state, logged: false };
    case LOGIN_SUCCESS:
      return { ...state, logged: true };
    default:
      return state;
  }
};

export default reducer;

