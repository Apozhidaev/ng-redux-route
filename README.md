# ng-redux-route

```javascript
import angular from 'angular';
import ngRoute from 'angular-route';
import { combineReducers } from 'redux';
import ngRedux from 'ng-redux';
import createLogger from 'redux-logger';
import ngReduxRoute, { routeActions, routeReducer } from 'ng-redux-route';


const rootReducer = combineReducers({
  //app: appReducer
  router: routeReducer,
});

const app = angular.module('app', [
  ngRoute,
  ngRedux,
  ngReduxRoute,
])
  .config(($ngReduxProvider) => {
    const logger = createLogger({
      level: 'info',
      collapsed: true,
    });
    $ngReduxProvider.createStoreWith(rootReducer, ['ngRouterMiddleware', logger]);
  })
  .run(($ngRedux) => {
    $ngRedux.dispatch(routeActions.init());
  })
  .name;

export default app;
```

### Usage:

#### setLocation(setters)

```javascript
$ngRedux.dispatch(routeActions.setLocation([
  { fn: 'search', args: ['company', 1] }, // $location.search('company', 1)
  { fn: 'replace' },                      // $location.replace()
])));
```

see [$location documentation](https://docs.angularjs.org/api/ng/service/$location)


```javascript
const mapStateToThis = state => ({
  router: state.router,
});
const mapDispatchToThis = ({
  setLocation: routeActions.setLocation,
});
const unsubscribe = $ngRedux.connect(mapStateToThis, mapDispatchToThis)(this);
$scope.$on('$destroy', unsubscribe);

this.setLocation([
  { fn: 'url', args: ['/some-url'] }, //  $location.url('/some-url')
]);

```
see [ngRedux documentation](https://github.com/wbuchwalter/ng-redux#api).