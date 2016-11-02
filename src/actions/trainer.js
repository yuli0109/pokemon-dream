import axios from 'axios';
import C from '../constants/index';
import { database } from '../firebaseApp';

const trainersRef = database.ref('trainers');
const seatStatusRef = database.ref('seatStatus');
const locationRef = database.ref('location');

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
    let pokemonNew = {};
    const { selected_pokemon } = getState().trainer
    pokemonNew[getState().auth.uid] = {
      name: selected_pokemon.data.name,
      pokemon_id: selected_pokemon.data.id,
      moves: props,
      stats: selected_pokemon.data.stats,
      front_img: selected_pokemon.data.sprites.front_default,
      back_img: selected_pokemon.data.sprites.back_default
    }
    dispatch({
      type: C.SAVE_POKEMON
    });
    trainersRef.update(pokemonNew, (error) => {
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
        let seatNew = {};
        seatNew[getState().auth.uid] = false;
        seatStatusRef.update(seatNew)
        let loactionNew = {};
        loactionNew[getState().auth.uid] = '/battle_room';
        locationRef.update(loactionNew)
      }
    });
  };
};

export const syncPokemon = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    trainersRef.child(uid).off();
    trainersRef.child(uid).on('value', snapshot => {
      dispatch({
        type: C.SYNC_POKEMON,
        data: snapshot.val()
      });
      if (snapshot.val()) {
        const selectPokemonDispatcher= selectPokemon(snapshot.val().pokemon_id);
        selectPokemonDispatcher(dispatch, getState);
      }
    }, error => {
      dispatch({
        type: C.SYNC_POKEMON_FAILED,
        message: error.message
      })
    });
  }
};

