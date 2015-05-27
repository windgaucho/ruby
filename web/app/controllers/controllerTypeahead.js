(function(){
    var ControllerTypeahead = function($scope, $log, $http) {
        
        $scope.productos = [];

        $scope.getProductos = function(descripcion){
            var urlBase = 'http://localhost:3000/api';
           
            return $http.get( urlBase + '/articulos', {
                params: {
                    descripcion: descripcion
                }
            }).then(function (response) {
                return response.data;
            });
        };
        
        $scope.onSelect = function($item) {
            $log.log($item);
            $scope.productos.push($item);
        };
        
        $scope.importeTotal = function() {
            var total = 0;
            for (var i = 0; i < this.productos.length; i++) {
                var item = this.productos[i];
                total += item.precio;
            }
            return total; 
        };

       $scope.cantidadTotal = function() {
            var total = 0;
            for (var i = 0; i < this.productos.length; i++) {
                var item = this.productos[i];
                total += 1;
            }
            return total; 
        };
    };
    // por la minificación
    ControllerTypeahead.$inject = ['$scope', '$log', '$http'];
    angular.module('appRuby').controller('ControllerTypeahead', ControllerTypeahead);
}());