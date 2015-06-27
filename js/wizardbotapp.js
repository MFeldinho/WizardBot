/// <reference path="../typings/angularjs/angular.d.ts"/>
var app = angular.module('WizardBotApp', ['ngRoute']);

//Define Routing for app
//Uri /Home -> template home.html and Controller HomeController
//Uri /About -> template about.html and Controller AboutController
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

app.controller('HomeController', function($scope) {
    $scope.message = 'Home';
});

app.controller('AboutController', function($scope) {
    $scope.message = 'About';
});

app.controller('AllCardsController', function($scope) {
    $scope.message = 'All Cards';
    $scope.cards = [
        {id:'r01',name:'Red 1'},
        {id:'r02',name:'Red 2'},
        {id:'w01',name:'Wizard 1'}
    ];
});