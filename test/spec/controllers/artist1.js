'use strict';

describe('Controller: Artist1Ctrl', function () {

  // load the controller's module
  beforeEach(module('musicTutorsApp'));

  var Artist1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Artist1Ctrl = $controller('Artist1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Artist1Ctrl.awesomeThings.length).toBe(3);
  });
});
