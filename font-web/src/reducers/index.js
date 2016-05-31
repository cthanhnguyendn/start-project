import { combineReducers } from 'redux';
import simple from './simple';
import authentication from './authentication';
import locale from './locale';
import users from './users';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  form:formReducer,
  simple,
  authentication,
  locale,
  routing,
  users
});
