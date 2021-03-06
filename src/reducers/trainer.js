import C from '../constants/index';

const initialState = {
  uid: null,
  pokemon: null,
  selected_pokemon: null,
  api_data: null,
  status: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case C.GET_POKEMON:
      return {
        ...state,
        uid: action.uid,
        api_data: action.api_data
      };
    case C.SELECT_POKEMON:
      return {
        ...state,
        selected_pokemon: action.api_data
      };
    case C.SAVE_POKEMON:
      return {
        ...state
      };
    case C.FIREBASE_TRAINER_INITIALIZE_BEGIN:
      return {
        ...state,
        status: 'Submmiting'
      };
    case C.INITIALIZE_TRAINER_SUCCEED:
      return {
        ...state,
        status: action.message
      };
    case C.SYNC_POKEMON:
      return {
        ...state,
        pokemon: action.data
      };
    case C.SYNC_POKEMON_FAILED:
      return {
        ...state,
        status: action.message
      };
    default:
      return state
  }
};
