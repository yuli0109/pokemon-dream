import C from '../constants';
import { database } from '../firebaseApp';

const battleroomsRef = database.ref('battleroom');
const seatStatusRef = database.ref('seatStatus');

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

export const listenToSeats = () => {
  return (dispatch, getState) => {
    seatStatusRef.on('value', (snapshot) => {
      dispatch({
        type: C.SEAT_STATUS_RECEIVE,
        data: snapshot.val()[getState().auth.uid]
      });
    })
  }
}

export const takeSeat = (room, seat) => {
  return (dispatch, getState) => {
    dispatch({type: C.TAKING_SEAT})
    let seatUpdate = {};
    seatUpdate[getState().auth.uid] = true;
    battleroomsRef.child(room).child(seat).update({
      isAvaliable: false,
      uid: getState().auth.uid
    })
    .then(dispatch({type: C.ON_SEAT}))
    .then(seatStatusRef.update(seatUpdate));
  }
}

export const leaveSeat = (room, seat) => {
  return (dispatch, getState) => {
    dispatch({type: C.LEAVING_SEAT})
    let seatUpdate = {};
    seatUpdate[getState().auth.uid] = false;
    battleroomsRef.child(room).child(seat).update({
      isAvaliable: true,
      uid: null
    })
    .then(dispatch({type: C.LEFT_SEAT}))
    .then(seatStatusRef.update(seatUpdate));
  }
}
