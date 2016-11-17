/**
*  Module
*
* Description
*/
angular.module("gamesarena", ["ngRoute"]);



angular.module("gamesarena")
.config(function($routeProvider) {
	
	$routeProvider.otherwise("/");

	$routeProvider.when('/',{
		controller:"MainController",
		templateUrl:"scripts/main/main.html"
	})

});