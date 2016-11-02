import C from '../constants/index';

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case C.INITIALIZE_BATTLE:
      return {
        ...state,
        battleId: action.battleKey
      };
    case C.TERMINATE_BATTLE:
      return {
        ...state,
        battleId: null
      };
    case C.LOAD_INITIAL_BATTLE_STAGE:
      return {
        ...state,
        battleDetail: action.battle
      }
    case C.SYNC_BATTLE:
      return {
        ...state,
        battleDetail: action.battle
      };
    case C.STOP_LISTENING_BATTLE:
      return {
        ...state,
        battleDetail: null
      };
    default:
      return state
  }
}
