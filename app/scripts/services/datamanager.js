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
      var categoryFile = 'category/' + id + '.json';
      console.log(categoryFile);
      return $.get(category/css.json);
    };
  });
