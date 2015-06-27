/// <reference path="../typings/angularjs/angular.d.ts"/>
var app = angular.module('WizardBotApp', [
  'ngRoute',
  'wizardBotControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      }).
      when('/About', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
      }).
      when('/AllCards', {
        templateUrl: 'templates/allcards.html',
        controller: 'AllCardsController'
      }).
      otherwise({
        redirectTo: '/Home'
      });
  }]);