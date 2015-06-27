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
    $scope.cards = [
        {id:'r01',name:'Red 1'},
        {id:'r02',name:'Red 2'},
        {id:'w01',name:'Wizard 1'}
    ];
  }]);