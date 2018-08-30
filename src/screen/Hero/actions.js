import { HERO_REQUEST, CLEAR_HERO } from './reducer';

export function getHero(id) {
  return {
    type: HERO_REQUEST,
    payload: id
  };
}

export function clearHero() {
  return {
    type: CLEAR_HERO
  };
}

