'use strict';

describe('Controller: HyroglificsCtrl', function () {

  // load the controller's module
  beforeEach(module('musicTutorsApp'));

  var HyroglificsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HyroglificsCtrl = $controller('HyroglificsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HyroglificsCtrl.awesomeThings.length).toBe(3);
  });
});
