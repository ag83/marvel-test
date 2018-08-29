import constants from '../constants';
import { addGetParameters } from './helpers';

export async function getHeroes(params) {
  const paramsWithApiKey = { ...params, apikey: constants.marvelApiKey };
  const response = await fetch(`${constants.marvelApi}characters${addGetParameters(paramsWithApiKey)}`);
  const data = await response.json();
  return data.data;
}

export async function getHero() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}
