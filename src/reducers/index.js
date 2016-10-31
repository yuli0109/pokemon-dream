import { combineReducers } from 'redux';
import auth from './auth';
import trainer from './trainer';
import battlerooms from './battlerooms';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth,
  trainer,
  battlerooms,
  form: formReducer
});


export default rootReducer
