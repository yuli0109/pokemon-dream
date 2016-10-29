import C from '../constants/index';

const initialState = {
  uid: null,
  pokemon: null,
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
    default:
      return state
  }
};
