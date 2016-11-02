import { combineReducers } from 'redux';
import auth from './auth';
import trainer from './trainer';
import battlerooms from './battlerooms';
import moves from './moves';
import battleInfo from './battling';
import battle_feedback from './battle_feedback';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  auth,
  trainer,
  battlerooms,
  moves,
  battleInfo,
  battle_feedback,
  form: formReducer,
  routing: routerReducer
});


export default rootReducer
