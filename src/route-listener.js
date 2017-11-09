import { routeChangeSuccess } from './action-creaters';
import router from './router';


export default function routeListener($rootScope, $location, $ngRedux) {
  $rootScope.$on('$routeChangeSuccess', () => {
    $ngRedux.dispatch(routeChangeSuccess(router($location)));
  });
}

routeListener.$inject = [
  '$rootScope',
  '$location',
  '$ngRedux',
];
