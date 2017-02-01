'use strict';

describe('Controller: SearchartistsCtrl', function () {

  // load the controller's module
  beforeEach(module('musicTutorsApp'));

  var SearchartistsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchartistsCtrl = $controller('SearchartistsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SearchartistsCtrl.awesomeThings.length).toBe(3);
  });
});
