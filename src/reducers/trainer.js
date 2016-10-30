import C from '../constants/index';

const initialState = {
  uid: null,
  pokemon: null,
  selected_pokemon: null,
  api_data: null
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
      }
    default:
      return state
  }
};
