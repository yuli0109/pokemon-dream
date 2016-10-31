import axios from 'axios';
import C from '../constants/index';
import { database } from '../firebaseApp';

const trainersRef = database.ref('trainers');

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

export const selectPokemon = (pokeIndex) => {
  return (dispatch) => {
    axios.get(`${baseUrl}${pokeIndex}`)
    .then(data => {
      dispatch({
        type: C.SELECT_POKEMON,
        api_data: data
      });
    })
  }
}

export const savePokemon = (props) => {
  return (dispatch, getState) => {
    const pokemon = {
      name: getState().trainer.selected_pokemon.data.name,
      pokemon_id: getState().trainer.selected_pokemon.data.id,
      trainer: getState().auth.uid,
      moves: props
    }
    dispatch({
      type: C.SAVE_POKEMON,
      pokemon: pokemon
    });
    trainersRef.push(pokemon, (error) => {
      dispatch({type: C.FIREBASE_TRAINER_INITIALIZE_BEGIN});
      if (error) {
        dispatch({
          type: C.INITIALIZE_TRAINER_FAILED,
          error: `Submission failed! ${error}`
        });
      } else {
        dispatch({
          type: C.INITIALIZE_TRAINER_SUCCEED,
          message: 'Submission successfully saved!'
        });
      }
    });
  };
};

