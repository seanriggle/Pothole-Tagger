'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/history', {templateUrl: 'partials/history.html', controller: 'HistoryCtrl'});
    $routeProvider.when('/tag', {templateUrl: 'partials/tag.html', controller: 'TagCtrl'});
       $routeProvider.when('/account', {templateUrl: 'partials/account.html', controller: 'AccountCtrl'});
    $routeProvider.otherwise({redirectTo: '/tag'});
  }]);
