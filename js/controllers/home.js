angular.module('app')
	.controller('home', function homeController($scope, $location, $anchorScroll, getResources) {


		getResources.data().then(function(resp) {
			$scope.resp = resp.data;
		});

        $scope.gotoBottom = function (x){
            $location.hash('C');
            $anchorScroll();
        };

	
});