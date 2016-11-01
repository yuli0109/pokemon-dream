import C from '../constants/index';

const initialState = {};
var count = 1;

export default (state = initialState, action) => {
  switch (action.type) {
    case C.RECEIVE_MOVE_DETAIL:
      return {
        ...state,
        [`move_${count++}`]: action.move
      };
    default:
      return state
  }
}
