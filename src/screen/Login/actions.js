import { LOGIN_REQUESTING, LOGOUT_REQUESTING } from './reducer';

export function loginRequest({ email, password }) {
  return {
    type: LOGIN_REQUESTING,
    payload: { email, password }
  };
}

export function logoutRequest() {
  return {
    type: LOGOUT_REQUESTING
  };
}
