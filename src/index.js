import angular from 'angular';
import ngRoute from 'angular-route';

import routerMiddleware from './router-middleware';

import { init, setLocation } from './action-creaters';
import router from './router-reducer';

export default angular
  .module('ng-redux-route', [ngRoute])
  .factory('ngRouterMiddleware', routerMiddleware)
  .name;

export const routeActions = { init, setLocation };
export const routeReducer = router;
