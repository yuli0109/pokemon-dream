import axios from 'axios';
import C from '../constants/index';

const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;

export const getPokemon = () => {
  return (dispatch, getState) => {
    if (getState().auth.uid) {
      axios.get(`${baseUrl}`)
        .then(data => {
          dispatch({
            type: C.GET_POKEMON,
            uid: getState().auth.uid,
            pokemon: null,
            api_data: data
          });
        })
    } else {
      dispatch({
        type: C.GET_POKE_FAILED,
        uid: null,
        pokemon: null,
        api_data: null
      })
    };
  }
}
