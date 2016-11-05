'use strict';

/**
 * @ngdoc function
 * @name webToolbeltApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the webToolbeltApp
 */
angular.module('webToolbeltApp')
  .controller('UserCtrl', ['datamanager', function(datamanager){
    this.name = 'CATEGORIAS';
    var vm = this;

    datamanager.getCategories().then(function(data) {
      vm.categories = data;
    });
  }]);
