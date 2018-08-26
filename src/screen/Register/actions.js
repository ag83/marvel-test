import { REGISTER_REQUESTING } from './reducer';

export default function registerRequest({ email, password }) {
  return {
    type: REGISTER_REQUESTING,
    payload: { email, password }
  };
}
