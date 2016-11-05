'use strict';

/**
 * @ngdoc service
 * @name webToolbeltApp.datamanager
 * @description
 * # datamanager
 * Service in the webToolbeltApp.
 */
angular.module('webToolbeltApp')
  .service('datamanager', function () {
    this.getCategories = function(){
      return $.get( 'users/categories.json' );
    };

    this.getCategory = function(id){
      var categoryFile = 'web-toolkit-lite/' + 'category/' + id + '.json';
      console.log(categoryFile);
      return $.get(categoryFile);
    };
  });
