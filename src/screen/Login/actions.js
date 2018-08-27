import { LOGIN_REQUESTING, LOGOUT_REQUESTING, LOGIN_RESTORE, LOGOUT_RESTORE } from './reducer';

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

export function loginRestore(user) {
  return {
    type: LOGIN_RESTORE,
    payload: user
  };
}

export function logoutRestore() {
  return {
    type: LOGOUT_RESTORE
  };
}
