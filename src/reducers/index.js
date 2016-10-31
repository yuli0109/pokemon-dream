import { combineReducers } from 'redux';
import auth from './auth';
import trainer from './trainer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth,
  trainer,
  form: formReducer
});


export default rootReducer
