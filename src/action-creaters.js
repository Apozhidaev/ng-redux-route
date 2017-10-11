import { INIT, SET_LOCATION } from './action-types';


export function init() {
  return {
    type: INIT,
  };
}

export function setLocation(setters) {
  return {
    setters,
    type: SET_LOCATION,
  };
}
