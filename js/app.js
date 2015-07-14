/// <reference path="../typings/angularjs/angular.d.ts"/>

// Routing and Angular Modules
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
      when('/Game', {
        templateUrl: 'templates/game.html',
        controller: 'GameController'
      }).
      when('/AllCards', {
        templateUrl: 'templates/allcards.html',
        controller: 'AllCardsController'
      }).
      when('/About', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
      }).
      otherwise({
        redirectTo: '/Home'
      });
  }]);
  
// TYPE DEFINITIONS
// The namespace
var WBA = WBA || {};

// Card repository
WBA.CardRepo = function() {
  
  WBA.CardRepo.prototype.getAllCards = function() {
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
  
  WBA.CardRepo.prototype.load = function() {
    
  }
  
  WBA.CardRepo.prototype.save = function() {
    
  }
};

// Game
WBA.Game = function() {
  this.gameState = 'NoGame';
  this.started;
  this.playerName = 'No Player';
  this.currentRound;
  
  WBA.Game.prototype.getGameState = function() {
    return this.gameState;
  }
  
  WBA.Game.prototype.getStarted = function() {
    return this.started;
  }
  
  WBA.Game.prototype.getPlayerName = function() {
    return this.playerName;
  }
  
  WBA.Game.prototype.getCurrentRound = function() {
    return this.currentRound;
  }
  
  WBA.Game.prototype.create = function(playerName) {
    this.gameState = 'New';
    this.started = new Date();
    this.playerName = playerName;
    this.currentRound = 1;
    this.save();
  }
  
  WBA.Game.prototype.save = function() {
    var gameData = {}
    gameData.state = this.gameState;
    gameData.started = this.started;
    gameData.playerName = this.playerName;
    gameData.currentRound = this.currentRound;
    
    if(localStorage.wizardGameData) {
      localStorage.removeItem('wizardGameData');
    }
    
    localStorage.wizardGameData = JSON.stringify(gameData);
  }
  
  WBA.Game.prototype.load = function() {
    if(localStorage.wizardGameData) {
      var gameData = JSON.parse(localStorage.wizardGameData);
      
      this.gameState = gameData.gameState;
      this.started = gameData.started;
      this.playerName = gameData.playerName;
      this.currentRound = gameData.currentRound;
    }
  }
  
  WBA.Game.prototype.reset = function() {
    this.gameState = 'NoGame';
    this.started = '';
    this.playerName = 'No Player';
    this.currentRound = 1;
    
    if(localStorage.wizardGameData) {
      localStorage.removeItem('wizardGameData');
    }
  }
  
};

// AI player
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