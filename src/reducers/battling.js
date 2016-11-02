import C from '../constants/index';

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case C.INITIALIZE_BATTLE:
      return {
        ...state,
        battleId: action.battleKey
      };
    default:
      return state
  }
}
