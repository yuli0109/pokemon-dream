import C from '../constants';
import { database } from '../firebaseApp';
import { browserHistory } from 'react-router';

const battleRef = database.ref('battles');
const trainerRef = database.ref('trainers');
const roomRef = database.ref('battleroom').child('room_1');
const locationRef = database.ref('location');


export const listenToLocation = () => {
  return (dispatch, getState) => {
    locationRef.off();
    locationRef.on('value', snapshot => {
      if (snapshot.val() && snapshot.val().hasOwnProperty(getState().auth.uid)) {
        browserHistory.push(`${snapshot.val()[getState().auth.uid]}`);
      }
    })
  }
}

export const initializeBattle  = (room) => {
  return (dispatch, getState) => {
    const battleDate = new Date().getTime();
    const trainer_1 = room.seat_1.uid;
    const trainer_2 = room.seat_2.uid;
    const battle = {
      Date: battleDate,
      nextTurn: trainer_1,
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
    }).then(() => {
      trainerRef.child(room.seat_2.uid).once('value').then(snapshot => {
        battle.trainers[trainer_2] = snapshot.val()
        const battleKeyRef = battleRef.push(battle)
        roomRef.update({battle: battleKeyRef.key}).then(() => {
          locationRef.update({[trainer_1]: `/battle/${battleKeyRef.key}`, [trainer_2]: `/battle/${battleKeyRef.key}`}).then(() => {
            dispatch({
              type: C.INITIALIZE_BATTLE,
              battleKey: battleKeyRef.key
            });
          })
        });
      })
    })
  }
};

export const surrenderBattle = () => {
  return (dispatch, getState) => {
    locationRef.update({
          [getState().battlerooms.room_1.seat_1.uid]: '/battle_room',
          [getState().battlerooms.room_1.seat_2.uid]: '/battle_room'
    }).then(() => {
      dispatch({
        type: C.TERMINATE_BATTLE
      });
    })
  }
};

export const loadBattleOnce = (battleId) => {
  return (dispatch) => {
    battleRef.child(battleId).once('value').then(snapshot => {
      dispatch({
        type: C.LOAD_INITIAL_BATTLE_STAGE,
        battle: snapshot.val()
      });
    })
  }
}

export const listenToBattle = (battleId) => {
  return (dispatch) => {
    battleRef.child(battleId).on('value', snapshot => {
      console.log('BattleInfo changed')
      console.log(snapshot.val())
      dispatch({
        type: C.SYNC_BATTLE,
        battle: snapshot.val()
      })
    })
  }
}

export const endListenToBattle = (battleId) => {
  return (dispatch) => {
    battleRef.child(battleId).off();
    dispatch({
      type: C.STOP_LISTENING_BATTLE
    })
  }
};

export const switchTurn = (battleId, opponentId) => {
  return (dispatch) => {
    battleRef.child(battleId).update({nextTurn: opponentId});
  }
}




