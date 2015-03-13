(function(){

	var listApp = angular.module('ListApp',[]);

	listApp.controller("ListCtrl", ['$scope', '$http', function ($scope, $http) {
		
		$scope.overlayVisible = false;

		$http.get('names.json').success(

			function(data){
				$scope.people = data.people;
			}

		).error(

			function(){
				alert('Ops something went wrong!');
			}
		);
		
		$scope.clearSearch = function(){
			$scope.query = "";
		}

		$scope.showPersonDetails = function(person){
			$scope.activePerson = person;
			$scope.overlayVisible = true;
		};

	}]);

})();