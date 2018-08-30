import { takeEvery, call, put } from 'redux-saga/effects';

import { HERO_REQUEST, HERO_SUCCESS } from './reducer';
import { SET_LOADING } from '../Common/reducer';
import showMessage from '../Common/sagas';
import { getHeroById } from '../../lib/marvelApi';


function* getHeroFlow(action) {
  let hero;
  try {
    yield put({ type: SET_LOADING, payload: true });
    const id = action.payload;
    hero = yield call(getHeroById, id);
    yield put({ type: HERO_SUCCESS, payload: hero });
  } catch (error) {
    yield call(showMessage, { type: 'error', text: error.message });
  } finally {
    yield put({ type: SET_LOADING, payload: false });
  }
  return hero;
}

function* heroWatcher() {
  yield [
    takeEvery(HERO_REQUEST, getHeroFlow),
  ];
}

export default heroWatcher;
