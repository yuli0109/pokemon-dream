import C from './constants';
import firebase from 'firebase';

firebase.initializeApp(C.firebaseConfig);
export const auth = firebase.auth();
export const database = firebase.database();
