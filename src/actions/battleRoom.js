import C from '../constants';
import { database } from '../firebaseApp';

const battleroomsRef = database.ref('battleroom');

export const listenToBattlerooms = () => {
  return (dispatch) => {
    battleroomsRef.off();
    battleroomsRef.on('value', (snapshot) => {
      dispatch({
        type: C.BATTLEROOMS_RECEIVE_DATA,
        data: snapshot.val()
      });
    }, (error) => {
      dispatch({
        type: C.BATTLEROOMS_RECEIVE_DATA_ERROR,
        message: error.message
      })
    })
  }
}

export const takeSeat = (room, seat) => {
  return (dispatch, getState) => {
    dispatch({type: C.TAKING_SEAT})
    battleroomsRef.child(room).child(seat).update({
      isAvaliable: false,
      uid: getState().auth.uid
    })
    .then(dispatch({type: C.ON_SEAT}));
  }
}
