import { createSelector } from 'reselect';

export const currentHeroesSelector = state => state.heroes.heroes;

const heroSelector = state => state.hero.hero;

const heroId = (state) => {
  const path = state.routing.location.pathname;
  if (path.indexOf('hero/') !== -1) {
    return path.split('/').slice(-1).pop();
  }
  return undefined;
};

export const currentHeroSelector = createSelector(
  currentHeroesSelector,
  heroSelector,
  heroId,
  (heroes, hero, id) => {
    if (heroes && !hero && id) {
      return heroes.find(item => item.id == id);
    } else if (hero && id && hero.id == id) {
      return hero;
    }
    return undefined;
  }
);
