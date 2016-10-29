import { combineReducers } from 'redux';
import auth from './auth';
import trainer from './trainer';

const rootReducer = combineReducers({
  auth,
  trainer
});


export default rootReducer
