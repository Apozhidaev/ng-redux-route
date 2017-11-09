import { SET_LOCATION, BACK } from './action-types';
import router from './router';


export default function routeMiddleware($location, $window) {
  return (store) => (next) => (action) => {
    switch (action.type) {
      case SET_LOCATION:
        action.setters.forEach((setter) => {
          $location[setter.fn](...(setter.args || []));
        });
        action.router = router($location);
        break;
      case BACK:
        $window.history.back();
        break;
    }
    return next(action);
  };
}

routeMiddleware.$inject = ['$location', '$window'];
