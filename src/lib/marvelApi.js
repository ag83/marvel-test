import constants from '../constants';
import { addGetParameters } from './helpers';

export async function getHeroes(params) {
  const paramsWithApiKey = { ...params, apikey: constants.marvelApiKey };
  const response = await fetch(`${constants.marvelApi}characters${addGetParameters(paramsWithApiKey)}`);
  const data = await response.json();
  return data.data;
}

export async function getHeroById(id) {
  const response = await fetch(`${constants.marvelApi}characters/${id + addGetParameters({ apikey: constants.marvelApiKey })}`);
  const data = await response.json();
  const hero = data.data.results.find(item => item.id == id);
  return hero;
}
