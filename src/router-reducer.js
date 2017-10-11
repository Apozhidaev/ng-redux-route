import { INIT, SET_LOCATION } from './action-types';


export default (state = {}, action) => {
  switch (action.type) {
    case INIT:
    case SET_LOCATION:
      return action.router;
    default:
      return state;
  }
};
