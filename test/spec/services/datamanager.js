'use strict';

describe('Service: datamanager', function () {

  // load the service's module
  beforeEach(module('webToolbeltApp'));

  // instantiate service
  var datamanager;
  beforeEach(inject(function (_datamanager_) {
    datamanager = _datamanager_;
  }));

  it('should do something', function () {
    expect(!!datamanager).toBe(true);
  });

});
