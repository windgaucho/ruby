(function(){
	var factoryProductos = function($http) {
		var factory = {};
		var urlBase = 'http://localhost:3000/api';

		factory.getProductos = function(descripcion) {
            if (descripcion){
                return $http.get( urlBase + '/articulos', {params: {descripcion: descripcion}});
            } else {
                return $http.get( urlBase + '/articulos');
            }
		}
        
		return factory;
	};

	// por la minificación
	factoryProductos.$inject = ['$http'];
	angular.module('appRuby').factory('factoryProductos', factoryProductos);
}());