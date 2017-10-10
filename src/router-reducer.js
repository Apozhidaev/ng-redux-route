import { SET_LOCATION_URL, SET_LOCATION_SEARCH } from './action-types';


export default (state = {}, action) => {
  switch (action.type) {
    case SET_LOCATION_URL:
    case SET_LOCATION_SEARCH:
      return action.router;
    default:
      return state;
  }
};
