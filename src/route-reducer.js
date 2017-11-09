import { SET_LOCATION, ROUTE_CHANGE_SUCCESS } from './action-types';


export default (state = {}, action) => {
  switch (action.type) {
    case SET_LOCATION:
    case ROUTE_CHANGE_SUCCESS:
      return action.router;
    default:
      return state;
  }
};
