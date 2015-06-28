/// <reference path="../typings/angularjs/angular.d.ts"/>

// The main WizardBotApp including the needed controllers starts here
var wizardBotControllers = angular.module('wizardBotControllers', []);

wizardBotControllers.controller('HomeController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.message = 'Home';
  }]);
  
wizardBotControllers.controller('AboutController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.message = 'About';
  }]);
  
wizardBotControllers.controller('AllCardsController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.message = 'All Cards';
    
    var repo = new WBA.CardRepo(true);
    $scope.cards = repo.getAllCards();
  }]);
  
  
// Repository starts here
var WBA = WBA || {};

WBA.CardRepo = function(isMock) {
  this.isMock = isMock;
  
  WBA.CardRepo.prototype.getAllCards = function() {
    if(this.isMock) {
      return [
          { id:'r01', name:'Red 1' },
          { id:'r02', name:'Red 2' },
          { id:'w01', name:'Wizard 1' },
          { id:'g01', name:'Goop 1' }
      ];
    }
    
    return '';
  };
};