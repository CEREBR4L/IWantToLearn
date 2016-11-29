angular.module('app')
	.controller('home', function homeController($scope, getResources) {

		getResources.data().then(function(resp) {
			$scope.resp = resp.data;
		});

});