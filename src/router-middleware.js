import { INIT, SET_LOCATION } from './action-types';


export default function routerMiddleware($location, $routeParams) {
  return (store) => (next) => (action) => {
    switch (action.type) {
      case SET_LOCATION:
        action.setters.forEach((setter) => {
          $location[setter.fn](...(setter.args || []));
        });
      case INIT:
        action.router = {
          url: $location.url(),
          path: $location.path(),
          params: $location.search(),
          hash: $location.hash(),
          state: $location.state(),
          routeParams: $routeParams
        };
    }
    return next(action);
  };
}

routerMiddleware.$inject = ['$location', '$routeParams'];
