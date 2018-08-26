import { call, put, takeLatest } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

import { REGISTER_REQUESTING } from './reducer';
import { SET_LOADING } from '../Common/reducer';
import showMessage from '../Common/sagas';
import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';
import { setUser } from '../User/actions';
import { HOME } from '../../router';

function* signupFlow(action) {
  try {
    yield put({ type: SET_LOADING, payload: true });
    const { email, password } = action.payload;
    const user = yield call(doCreateUserWithEmailAndPassword, email, password);
    yield call(showMessage, { type: 'info', text: `User ${email} registered successfully` });
    yield put(setUser(user));
    yield put(replace(HOME));
  } catch (error) {
    yield call(showMessage, { type: 'error', text: error.message });
  } finally {
    yield put({ type: SET_LOADING, payload: false });
  }
}

function* signupWatcher() {
  yield takeLatest(REGISTER_REQUESTING, signupFlow);
}

export default signupWatcher;
