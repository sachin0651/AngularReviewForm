'use strict';

/**
 * @ngdoc function
 * @name angularJsproApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsproApp
 */
angular.module('angularJsproApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
