'use strict';

/**
 * @ngdoc overview
 * @name angularJsproApp
 * @description
 * # angularJsproApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsproApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/kgtolbs', {
        templateUrl: 'views/kgtolbs.html',
        controller: 'KgtolbsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    
  });
