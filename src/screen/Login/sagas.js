import { takeEvery, call, put } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

import { LOGIN_REQUESTING, LOGOUT_REQUESTING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './reducer';
import { SET_LOADING } from '../Common/reducer';
import showMessage from '../Common/sagas';
import { doSignInWithEmailAndPassword, doSignOut } from '../../firebase/auth';
import { setUser, unsetUser } from '../User/actions';
import { LOGIN, HOME } from '../../router';

function* logoutFlow() {
  try {
    yield put({ type: SET_LOADING, payload: true });
    yield call(doSignOut);
    yield put(unsetUser());
    yield put({ type: LOGOUT_SUCCESS });
    yield put(replace(LOGIN));
  } catch (error) {
    yield call(showMessage, { type: 'error', text: error.message });
  } finally {
    yield put({ type: SET_LOADING, payload: false });
  }
}

function* loginFlow(action) {
  let user;
  try {
    yield put({ type: SET_LOADING, payload: true });
    const { email, password } = action.payload;
    user = yield call(doSignInWithEmailAndPassword, email, password);
    yield put(setUser(user));
    yield put({ type: LOGIN_SUCCESS });
    yield put(replace(HOME));
  } catch (error) {
    yield call(showMessage, { type: 'error', text: error.message });
  } finally {
    yield put({ type: SET_LOADING, payload: false });
  }
  return user;
}

function* loginWatcher() {
  yield [
    takeEvery(LOGIN_REQUESTING, loginFlow),
    takeEvery(LOGOUT_REQUESTING, logoutFlow)
  ];
}

export default loginWatcher;
