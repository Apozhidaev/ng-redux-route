import { SET_LOCATION_URL, SET_LOCATION_SEARCH } from './action-types';

/* eslint arrow-parens: "off" */
/* eslint no-unused-vars: "off" */
/* eslint no-param-reassign: "off" */
export default function routerMiddleware($location) {
  return (store) => (next) => (action) => {
    if (action.type === SET_LOCATION_URL || action.type === SET_LOCATION_SEARCH) {
      if (action.type === SET_LOCATION_URL) {
        $location.url(action.payload.url);
      } else if (action.type === SET_LOCATION_SEARCH) {
        $location.search(action.payload.params);
      }
      if (action.payload.replace) {
        $location.replace();
      }
      action.router = {
        url: $location.url(),
        params: $location.search(),
      };
    }
    return next(action);
  };
}

routerMiddleware.$inject = ['$location'];
