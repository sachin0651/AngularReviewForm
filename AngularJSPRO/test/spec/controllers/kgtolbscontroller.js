'use strict';

describe('Controller: KgtolbscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsproApp'));

  var KgtolbscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KgtolbscontrollerCtrl = $controller('KgtolbscontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
