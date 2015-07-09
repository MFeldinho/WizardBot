/// <reference path="../typings/angularjs/angular.d.ts"/>

// The main WizardBotApp including the needed controllers starts here
var wizardBotControllers = angular.module('wizardBotControllers', []);

wizardBotControllers.controller('HomeController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
  }]);
  
wizardBotControllers.controller('GameController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    
    // Initialize the game
    var game = new WBA.Game();
    $scope.gameState = game.getGameState();
  }]);
  
wizardBotControllers.controller('AllCardsController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    var cardRepo = new WBA.CardRepo(true);
    $scope.cards = cardRepo.getAllCards();
  }]);
  
wizardBotControllers.controller('AboutController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
  }]);
  
  
// Repository namespace starts here
var WBA = WBA || {};

// Card repo starts here
WBA.CardRepo = function(isMock) {
  this.isMock = isMock;
  
  WBA.CardRepo.prototype.getAllCards = function() {
    if(this.isMock) {
      return [
          { id:'r01', name:'Red 1', imageClass:"cardback" },
          { id:'r02', name:'Red 2', imageClass:"cardback" },
          { id:'r03', name:'Red 3', imageClass:"cardback" },
          { id:'r04', name:'Red 4', imageClass:"cardback" },
          { id:'r05', name:'Red 5', imageClass:"cardback" },
          { id:'r06', name:'Red 6', imageClass:"cardback" },
          { id:'r07', name:'Red 7', imageClass:"cardback" },
          { id:'r08', name:'Red 8', imageClass:"cardback" },
          { id:'w01', name:'Red Wiz', imageClass:"wizard-red" },
          { id:'w02', name:'Blue Wiz', imageClass:"wizard-blue" },
          { id:'w03', name:'Green Wiz', imageClass:"wizard-green" },
          { id:'w04', name:'Yellow Wiz', imageClass:"wizard-yellow" },
          { id:'g01', name:'Red Goop', imageClass:"cardback" }
      ];
    }
    
    return null;
  };
};

// Game starts here
WBA.Game = function() {
  
  WBA.Game.prototype.getGameState = function() {
      return 'NoGame';
  };
  
};

// AI player starts here
WBA.AIPlayer = function(name, isMock) {
  this.isMock = isMock;
  
  //TODO: Try to initialize from browser storage
  
  WBA.AIPlayer.prototype.newHand = function(hand) {
    this.hand = hand;
    this.originalHand = hand;
  }
  
  WBA.AIPlayer.prototype.guessTricks = function() {
      //TODO
      if(this.isMock) {
        return 1;
      }
      
      //TODO 
      return 0;
  };
  
};