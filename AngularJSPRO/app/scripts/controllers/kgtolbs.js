/*global $:false */
'use strict';

/**
 * @ngdoc function
 * @name angularJsproApp.controller:KgtolbsCtrl
 * @description
 * # KgtolbsCtrl
 * Controller of the angularJsproApp
 */
angular.module('angularJsproApp')
  .controller('KgtolbsCtrl', function ($scope) {
    $('#weight_kg').keyup(function() {
      $('#lbs_text').removeClass('result-hide');
      calculateLbs();
    });
    
    var calculateLbs = function() {
      var weight = parseInt($('#weight_kg').val());
      if (weight.length !== 0) {
        var finalLbs = weight * 2.2046;
        $scope.lbs = finalLbs.toFixed(4);
        if (isNaN($scope.lbs)) {
          $scope.lbs = '0';
        }
        console.log($scope.lbs);
      }
    };
    
    $scope.resetForm= function (){
      $scope.lbsconverterForm.$setPristine();
      $scope.convert.weight ='';
      $('#lbs_text').addClass('result-hide');
    };
  });
