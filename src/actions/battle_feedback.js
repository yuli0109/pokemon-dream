import C from '../constants';

export const logOpen = (message) => {
  return (dispatch) => {
    dispatch({
      type: C.LOG_FEEDBACK,
      message: message
    })
  }
}

export const logClose = () => {
  return (dispatch) => {
    dispatch({
      type: C.LOG_CLOSE
    })
  }
}
