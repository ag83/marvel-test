import { HEROES_REQUEST } from './reducer';

export default function heroesRequest(params) {
  return {
    type: HEROES_REQUEST,
    payload: params
  };
}
