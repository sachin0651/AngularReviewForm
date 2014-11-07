//Application Controller for the reviewing apllication
  angular.module('ApplicationForm', []).
  controller('reviewController', function($scope) {
    
    $scope.ratings = ['*' , '* *', '* * *', '* * * *', '* * * * *'];
    
    //reseting the form after submiting
    $scope.resetForm= function (review){
      //alert('hi');
      $scope.reviewForm.$setPristine();
      $scope.review.body = '';
      $scope.review.author = '';
      $scope.review.stars ='';
    };
  });

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /** Controller creations **/
//var app = angular.module("ApplicationForm", []);
//app.controller("reviewController",function($scope){
//  
//  $scope.resetForm= function (review){
//    //alert('hi');
//    $scope.reviewForm.$setPristine();
//    $scope.review.body = '';
//  };
//  
//});

//function reviewController($scope){
//  
//
//  
//  $scope.resetForm= function (review){
//    alert('hi');
//    $scope.reviewForm.$setPristine();
//    $scope.review.body = '';
//  };
//  var defaultForm = {
//      stars="",
//      body="",
//      author=""
//    };
//  
//}
   




    

 
