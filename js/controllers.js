/// <reference path="../typings/angularjs/angular.d.ts"/>

// The main WizardBotApp including the needed controllers starts here
var wizardBotControllers = angular.module('wizardBotControllers', []);


// The home controller
wizardBotControllers.controller('HomeController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
  }]);


// Represents the controller for all interactions with the game.
// Handles the game state and manages the access to the browser storage.
wizardBotControllers.controller('GameController', ['$scope', '$routeParams', '$route', 
  function($scope, $routeParams, $route) {
    
    // Intialization
    var game = new WBA.Game();
    game.load();
    
    $scope.gameState = game.getGameState();
    $scope.started = game.getStarted();
    $scope.playerName = game.getPlayerName();
    $scope.currentRound = game.getCurrentRound();

    // Create a new game and store the data initially in the browser storage
    $scope.createGame = function(playerName) {
      game.create(playerName);
      $route.reload();
    };
    
    // Reset the game and clear the browser storage
    $scope.resetGame = function() {
      game.reset();
      $route.reload();
    }
  }]);


// The AllCards controller
wizardBotControllers.controller('AllCardsController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    var cardRepo = new WBA.CardRepo();
    $scope.cards = cardRepo.getAllCards();
  }]);
  
  
// The About controller
wizardBotControllers.controller('AboutController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
  }]);