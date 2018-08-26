import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import hero from './screen/Hero/reducer';
import heroes from './screen/Heroes/reducer';
import login from './screen/Login/reducer';
import register from './screen/Register/reducer';
import user from './screen/User/reducer';
import common from './screen/Common/reducer';

export default combineReducers({
  routing: routerReducer,
  form,
  hero,
  heroes,
  login,
  register,
  user,
  common
});
