/*global $:false */
'use strict';
/**
 * @ngdoc function
 * @name angularJsproApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsproApp
 */
angular.module('angularJsproApp')
  .controller('MainCtrl', function ($scope) {
    
 // Bmi calculation part
    $('#user_weight,#height_feet,#height_inches').on('keyup', function() {
      $('#bmi_text').removeClass('result-hide');
      calculateBmi();
    });

    var calculateBmi = function() {
      var weight = parseInt($('#user_weight').val());
      var heightFeet = parseInt($('#height_feet').val());
      var heightInches = parseInt($('#height_inches').val());
      var height = (heightFeet * 12) + heightInches;
      if (weight.length !== 0) {
        var finalBmi = weight * 703 / (height * height);
        $scope.bmi = finalBmi.toFixed(4);
        if (isNaN($scope.bmi)) {
          $scope.bmi = '0';
        }
        console.log($scope.bmi);
      }
    };
    
    $scope.resetForm= function (){
      $scope.converterForm.$setPristine();
      $scope.convert.feet = '';
      $scope.convert.inches = '';
      $scope.convert.weight ='';
      $('#bmi_text').addClass('result-hide');
    };
  });
