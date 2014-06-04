'use strict';  //more strict javascript conventions

angular.module('wixApp', [
    'ngRoute',
    'wix'
  ]) //square bracket descibes list of dependencies of the module
  .config(function ($routeProvider) { //config is the function name - runs very early in the bootstrap
    $routeProvider //fetches the route provider - handles dependency injection - $ means it is a reserved name for angular
      .when('/', {
        templateUrl: 'views/app.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });