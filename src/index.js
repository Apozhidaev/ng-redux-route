import angular from 'angular';
import ngRoute from 'angular-route';

import routerMiddleware from './router-middleware';

import { init, setLocation } from './action-creaters';
import { setUrl, setPath, setSearch, setHash, setState } from './location-helpers';
import _routeReducer from './router-reducer';

export default angular
  .module('ng-redux-route', [ngRoute])
  .factory('ngRouterMiddleware', routerMiddleware)
  .name;

export const routeActions = { init, setLocation };
export const locationHelpers = { setUrl, setPath, setSearch, setHash, setState };
export const routeReducer = _routeReducer;
