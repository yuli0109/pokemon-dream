import C from '../constants';

const initialState = {
  open: false,
  message: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case C.LOG_FEEDBACK:
      return {
        ...state,
        open: true,
        message: action.message
      };
    case C.LOG_CLOSE:
      return {
        ...state,
        open: false
      };
    default:
      return state
  }
}
