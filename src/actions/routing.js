export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

export const syncRoute = (location) => {
  return (dispatch) => {
    dispatch({
      type: LOCATION_CHANGE,
      payload: location
    })
  }
}
