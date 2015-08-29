var myApp = angular.module('app', ['ngRoute']);
myApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/list', {
				templateUrl: 'http://127.0.0.1/web/angular/list.html',
				controller: 'RouteListCtl'
			})
			.when('/list/:id', {
				templateUrl: 'http://127.0.0.1/web/angular/detail.html',
				controller: 'RouteDetailCtl'
			})
			.otherwise({
				redirectTo: '/list'
			});
//		$locationProvider.html5Mode({
//			enabled: true,
//			requireBase: false
//		});
	}
]);
myApp.controller('RouteListCtl', function($scope) {});
myApp.controller('RouteDetailCtl', function($scope, $routeParams) {
	$scope.id = $routeParams.id;
});