angular.module('app').factory('getResources', function ($http) {

	return {

		data: function getData() {

			return $http.get('../json/list.json').success(function(data) {
				return data;
			});
		}

	};
});

