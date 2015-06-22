/// <reference path="../typings/angularjs/angular.d.ts"/>
var app = angular.module('WizardBotApp', []);

app.controller('HomeController', function($scope) {
    $scope.greeting = 'Hello!';
});

app.controller('AboutController', function($scope) {
    
});

app.controller('CardsArchiveController', function($scope) {
    $scope.cards = [
        {id:'r01',name:'Red 1'},
        {id:'r02',name:'Red 2'},
        {id:'w01',name:'Wizard 1'}
    ];
});