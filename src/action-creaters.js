import { SET_LOCATION, BACK, ROUTE_CHANGE_SUCCESS } from './action-types';


export function setLocation(setters) {
  return {
    setters,
    type: SET_LOCATION,
  };
}

export function back() {
  return {
    type: BACK,
  };
}

export function routeChangeSuccess(router) {
  return {
    type: ROUTE_CHANGE_SUCCESS,
    router,
  };
}
