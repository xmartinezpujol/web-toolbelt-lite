'use strict';

/**
 * @ngdoc overview
 * @name webToolbeltApp
 * @description
 * # webToolbeltApp
 *
 * Main module of the application.
 */
angular
  .module('webToolbeltApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/start.html'
      })
      .state('category', {
        url: '/category/:id',
        templateUrl: 'views/category.html',
        resolve: {
          categoryitems: function($stateParams, datamanager) {
            return datamanager.getCategory($stateParams.id);
          }
        },
        controller: function(categoryitems, $stateParams){
          this.data = categoryitems;
          this.test = $stateParams.id;
          this.clickUp = function(categoryitem){
            categoryitem.clicks += 1;
          };
        },
        controllerAs: 'category'
      });
  }]);
