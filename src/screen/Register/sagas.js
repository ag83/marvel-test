import { call, put, takeLatest } from 'redux-saga/effects';

import { REGISTER_REQUESTING, REGISTER_SUCCESS, REGISTER_ERROR } from './reducer';
import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';

function* signupFlow(action) {
  try {
    const { email, password } = action;

    const response = yield call(doCreateUserWithEmailAndPassword, email, password);
    yield put({ type: REGISTER_SUCCESS, response });
  } catch (error) {
    yield put({ type: REGISTER_ERROR, error });
  }
}

function* signupWatcher() {
  yield takeLatest(REGISTER_REQUESTING, signupFlow);
}

export default signupWatcher;
