"use strict";angular.module("webToolbeltApp",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("home",{url:"/",templateUrl:"views/start.html"}).state("category",{url:"/category/:id",templateUrl:"views/category.html",controller:"CategoryCtrl as category"})}]),angular.module("webToolbeltApp").controller("UserCtrl",["datamanager",function(a){this.name="CATEGORIAS";var b=this;a.getCategories().then(function(a){b.categories=a})}]),angular.module("webToolbeltApp").service("datamanager",function(){this.getCategories=function(){return $.get("web-toolkit-lite/users/categories.json")},this.getCategory=function(a){var b="web-toolkit-lite/category/"+a+".json";return console.log(b),$.get(b)}}),angular.module("webToolbeltApp").controller("CategoryCtrl",["$stateParams","datamanager",function(a,b){this.test=a.id;var c=this;b.getCategory(a.id).then(function(a){c.data=a})}]),angular.module("webToolbeltApp").run(["$templateCache",function(a){a.put("views/category.html",'<div class="row text-center"> <h2 class="text-uppercase">{{category.test}}</h2> </div> <ul id="category-list" class="row"> <li class="category-item col-md-4" ng-repeat="categoryitem in category.data"> <a href="{{categoryitem.url}}" target="_blank"><button ng-style="{\'background-color\': categoryitem.color}" class="btn btn-primary btn-block" ng-class="{\'hot\': categoryitem.clicks > 10}"> <md-icon class="material-icons md-light md-36"> {{category.icon}} </md-icon> <h5 class="text-uppercase">{{categoryitem.name}}</h5> </button></a> </li> </ul>'),a.put("views/home.html",'<div class="jumbotron"> <h1>Web Toolbelt</h1> </div> <div class="row text-center"> <h2 class="text-uppercase">{{user.name}}</h2> </div> <ul id="category-list" class="row"> <li class="category-item col-md-4" ng-repeat="category in user.categories"> <button ui-sref="category({id: category.id})" ng-style="{\'background-color\': category.color}" class="btn btn-primary btn-block" ng-class="{\'hot\': category.clicks > 10}"> <md-icon class="material-icons md-light md-36"> {{category.icon}} </md-icon> <h5 class="text-uppercase">{{category.name}}</h5> </button> </li> </ul>'),a.put("views/start.html",'<div class="row text-center"> <h3>Bienvenid@ a Web Toolbelt, el organizador de herramientas.</h3> <h3>Haz clic en una categoría para acceder a tus enlaces de interés.</h3> </div>')}]);