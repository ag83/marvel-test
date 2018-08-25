import registerSaga from './screen/Register/sagas';
import loginSaga from './screen/Login/sagas';
//import heroesSaga from './screen/Heroes/sagas';
//import heroSaga from './screen/Hero/sagas';

export default function* IndexSaga() {
  yield [
    registerSaga(),
    loginSaga(),
    //heroesSaga(),
    //heroSaga()
  ];
}
