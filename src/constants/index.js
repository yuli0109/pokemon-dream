import auth from './auth';
import trainer from './trainer';
import firebase from './firebase';
import battlerooms from './battlerooms';

export default Object.assign({},
  auth,
  firebase,
  trainer,
  battlerooms,
);
