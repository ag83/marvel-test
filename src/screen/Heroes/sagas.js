import { takeEvery, call, put, select } from 'redux-saga/effects';

import { HEROES_REQUEST, HEROES_SUCCESS, SET_PARAMETER } from './reducer';
import { SET_LOADING } from '../Common/reducer';
import showMessage from '../Common/sagas';
import { getHeroes } from '../../lib/marvelApi';


function* getHeroesFlow(action) {
  let heroes;
  try {
    if (action.payload) {
      yield put({ type: SET_PARAMETER, payload: action.payload });
    }
    yield put({ type: SET_LOADING, payload: true });
    const state = yield select();
    const { params } = state.heroes;
    heroes = yield call(getHeroes, params);
    yield put({ type: HEROES_SUCCESS, payload: heroes });
  } catch (error) {
    yield call(showMessage, { type: 'error', text: error.message });
  } finally {
    yield put({ type: SET_LOADING, payload: false });
  }
  return heroes;
}

function* heroesWatcher() {
  yield [
    takeEvery(HEROES_REQUEST, getHeroesFlow),
  ];
}

export default heroesWatcher;
