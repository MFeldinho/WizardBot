/// <reference path="../typings/angularjs/angular.d.ts"/>

// The main WizardBotApp including the needed controllers starts here
var wizardBotControllers = angular.module('wizardBotControllers', []);


wizardBotControllers.controller('HomeController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
  }]);

// Represents the controller for all interactions with the game.
// Handles the game state and manages the access to the browser storage.
wizardBotControllers.controller('GameController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    
    // Intialization
    var game = new WBA.Game();
    $scope.gameState = game.getGameState();
    $scope.playerName = game.getPlayerName();
    
    // Create a new game and store the data initially in the browser storage
    $scope.createGame = function(playerName) {
      game.create(playerName);
      $scope.gameState = game.getGameState();
      $scope.playerName = game.getPlayerName();
    };
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
  this.gameState = 'NoGame';
  this.started = '';
  this.playerName = 'No Player';
  
  WBA.Game.prototype.getGameState = function() {
    return this.gameState;
  };
  
  WBA.Game.prototype.getPlayerName = function() {
    return this.playerName;
  }
  
  WBA.Game.prototype.create = function(playerName) {
    this.gameState = 'New';
    this.started = new Date();
    this.playerName = playerName;
    save(this.gameState, this.started, this.playerName);
  }
  
  function save(gameState, started, playerName) {
    var gameData = {}
    gameData.state = gameState;
    gameData.started = started;
    gameData.playerName = playerName;
    
    if(localStorage.wizardGameData) {
      localStorage.removeItem('wizardGameData');
    }
    
    localStorage.wizardGameData = JSON.stringify(gameData);
  }
  
  function load() {
    
  }
  
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