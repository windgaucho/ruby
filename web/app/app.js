(function () {
    'use strict';
	var app = angular.module('appRuby', ['ngRoute', 'ui.bootstrap']);

	app.config(function ($routeProvider) {
		$routeProvider
		.when('/productos',
			{
				controller: 'ControllerProductos',
				templateUrl: 'views/productos.html'
			}
		)
	});
}());
