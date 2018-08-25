import { REGISTER_REQUESTING } from './reducer';

export default function registerRequest({ email, password }) {
  return {
    type: REGISTER_REQUESTING,
    email,
    password,
  };
}
