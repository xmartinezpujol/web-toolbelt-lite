'use strict';

/**
 * @ngdoc function
 * @name webToolbeltApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the webToolbeltApp
 */
angular.module('webToolbeltApp')
  .controller('CategoryCtrl', ['$stateParams', 'datamanager', function ($stateParams, datamanager) {
    this.test = $stateParams.id;
    var vm = this;

    datamanager.getCategory($stateParams.id).then(function(data) {
      vm.data = data;
    });
}]);
