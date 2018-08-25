import { HERO_REQUEST, HERO_SUCCESS } from './reducer';

export function getHero() {
  return {
    type: HERO_REQUEST,
  };
}

export function setHero() {
  return {
    type: HERO_SUCCESS,
  };
}

