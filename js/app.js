var myApp = angular.module('myApp', [
  'ngRoute',
  'fishControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
      templateUrl: 'templates/list.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
      templateUrl: 'templates/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);