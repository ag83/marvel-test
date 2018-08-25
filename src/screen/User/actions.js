import { USER_SET, USER_UNSET } from './reducer';

export function setUser(user) {
  return {
    type: USER_SET,
    user,
  };
}

export function unsetUser() {
  return {
    type: USER_UNSET,
  };
}
