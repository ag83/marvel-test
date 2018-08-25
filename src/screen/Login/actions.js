import { LOGIN_REQUESTING } from './reducer';

export default function loginRequest({ email, password }) {
  return {
    type: LOGIN_REQUESTING,
    email,
    password,
  };
}
