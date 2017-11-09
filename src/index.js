import angular from 'angular';
import ngRoute from 'angular-route';
import routeMiddleware from './route-middleware';
import routeListener from './route-listener';
import { setLocation, back } from './action-creaters';
import { setUrl, setPath, setSearch, setHash, setState } from './location-helpers';
import _routeReducer from './route-reducer';

export default angular
  .module('ng-redux-route', [ngRoute])
  .factory('ngRouteMiddleware', routeMiddleware)
  .run(routeListener)
  .name;

export const routeActions = { setLocation, back };
export const locationHelpers = { setUrl, setPath, setSearch, setHash, setState };
export const routeReducer = _routeReducer;
