import C from '../constants/index';
import axios from 'axios';

export const getMoveDetail = (url) => {
  return (dispatch) => {
    axios.get(url)
    .then(response => {
      dispatch({
        type: C.RECEIVE_MOVE_DETAIL,
        move: response.data
      })
    })
  }
}
