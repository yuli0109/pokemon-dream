import C from '../constants';
import { database } from '../firebaseApp';

const battleRef = database.ref('battles');
const trainerRef = database.ref('trainers');
const roomRef = database.ref('battleroom').child('room_1');

export const initializeBattle  = (room) => {
  return (dispatch) => {
    const battleDate = new Date().getTime();
    const trainer_1 = room.seat_1.uid;
    const trainer_2 = room.seat_2.uid;
    const battle = {
      Date: battleDate,
      trainers: {
        [trainer_1]: null,
        [trainer_2]: null
      },
      score: {
        [trainer_1]: 0,
        [trainer_2]: 0
      }
    };
    trainerRef.child(room.seat_1.uid).once('value').then(snapshot => {
      battle.trainers[trainer_1] = snapshot.val()
    }).then(
    trainerRef.child(room.seat_2.uid).once('value').then(snapshot => {
      battle.trainers[trainer_2] = snapshot.val()
      const battleKeyRef = battleRef.push(battle)
      roomRef.update({battle: battleKeyRef.key}).then(
        dispatch({
          type: C.INITIALIZE_BATTLE,
          battleKey: battleKeyRef.key
        })
      );
    }))
  }
};

export const listenToBattle = () => {

}


