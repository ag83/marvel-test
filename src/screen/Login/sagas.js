import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR } from './reducer';
import { doSignInWithEmailAndPassword } from '../../firebase/auth';
import { setUser, unsetUser } from '../User/actions';
import { USER_UNSET } from '../User/reducer';
import { LOGIN, HOME } from '../../router';

function* logout() {
  yield put(unsetUser());
  localStorage.removeItem('user');
  yield put(replace(LOGIN));
}

function* loginFlow(email, password) {
  let user;
  try {
    user = yield call(doSignInWithEmailAndPassword, email, password);
    yield put(setUser(user));

    yield put({ type: LOGIN_SUCCESS });

    localStorage.setItem('user', JSON.stringify(user));

    replace(HOME);
  } catch (error) {
    yield put({ type: LOGIN_ERROR, error });
  } finally {
    if (yield cancelled()) {
      yield put(replace(LOGIN));
    }
  }
  return user;
}

function* loginWatcher() {
  while (true) {
    const { email, password } = yield take(LOGIN_REQUESTING);
    const task = yield fork(loginFlow, email, password);
    const action = yield take([USER_UNSET, LOGIN_ERROR]);
    if (action.type === USER_UNSET) {
      yield cancel(task);
      yield call(logout);
    }
  }
}

export default loginWatcher;
