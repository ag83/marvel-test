import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { SHOW_MESSAGE, CLEAR_MESSAGE } from './reducer';


const next = (() => {
  let n = 0;
  return () => n++;
})();

function* showMessage({ text, type }) {
  const id = next();
  yield put({ type: SHOW_MESSAGE, payload: { id, text, type } });
  yield call(delay, 3000);
  yield put({ type: CLEAR_MESSAGE, payload: id });
}

export default showMessage;
