import C from '../constants/index';

const initialState = {
  status: null,
  room_1: {
    seat_1: {
      isAvaliable: true,
      uid: null
    },
    seat_2: {
      isAvaliable: true,
      uid: null
    }
  },
  room_2: {
    seat_1: {
      isAvaliable: true,
      uid: null
    },
    seat_2: {
      isAvaliable: true,
      uid: null
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case C.BATTLEROOMS_RECEIVE_DATA:
      return {
        ...state,
        room_1: action.data.room_1,
        room_2: action.data.room_2
      };
    case C.TAKING_SEAT:
      return {
        ...state,
        status: C.TAKING_SEAT
      };
    case C.ON_SEAT:
      return {
        ...state,
        status: C.ON_SEAT
      }
    default:
      return state;
  }
}
