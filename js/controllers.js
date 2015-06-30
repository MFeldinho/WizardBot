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
          { id:'r01', name:'Red 1', imagelink:"assets/card_back1.jpg" },
          { id:'r02', name:'Red 2', imagelink:"assets/card_back1.jpg" },
          { id:'r03', name:'Red 3', imagelink:"assets/card_back1.jpg" },
          { id:'r04', name:'Red 4', imagelink:"assets/card_back1.jpg" },
          { id:'r05', name:'Red 5', imagelink:"assets/card_back1.jpg" },
          { id:'r06', name:'Red 6', imagelink:"assets/card_back1.jpg" },
          { id:'r07', name:'Red 7', imagelink:"assets/card_back1.jpg" },
          { id:'r08', name:'Red 8', imagelink:"assets/card_back1.jpg" },
          { id:'w01', name:'Wizard 1', imagelink:"assets/card_back1.jpg" },
          { id:'g01', name:'Goop 1', imagelink:"assets/card_back1.jpg" }
      ];
    }
    
    return '';
  };
};