import { SET_LOCATION_URL, SET_LOCATION_SEARCH } from './action-types';


export function setLocationUrl(url, replace = false) {
  return {
    type: SET_LOCATION_URL,
    payload: { url, replace },
  };
}

export function setLocationSearch(params, replace = false) {
  return {
    type: SET_LOCATION_SEARCH,
    payload: { params, replace },
  };
}
