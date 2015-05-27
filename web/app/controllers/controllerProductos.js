(function(){

	var ControllerProductos = function($scope, $log, factoryProductos) {
        
		function init() {
			factoryProductos.getProductos()
				.success(function (productos) {
					$scope.productos = productos;
				})
				.error(function(data, status, headers, config) {
					$log.log(data.error + ' ' + status);
				});
		}

		//init();z
	};

	// por la minificación
	ControllerProductos.$inject = ['$scope', '$log', 'factoryProductos'];
	angular.module('appRuby').controller('ControllerProductos', ControllerProductos);
}());