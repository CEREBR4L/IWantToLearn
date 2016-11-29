
var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
	
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'home'
		})
	$routeProvider
		.otherwise({
			redirectTo: '/'
		});

	$locationProvider.html5Mode(true);
});