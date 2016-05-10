import { combineReducers } from 'redux';
import simple from './simple';
import authentication from './authentication';
import locale from './locale';
import { routerReducer as routing } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  formReducer,
  simple,
  authentication,
  locale,
  routing
});
