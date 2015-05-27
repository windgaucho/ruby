var models = require('../models');

exports.articulos = {
	all: function(request, reply){
        if (request.query.descripcion){
		  models.articulo.findAll({
            where: {
                descripcion: { like: "%" + request.query.descripcion + "%"}
                }  
            })
			.then(function(articulos){
				reply(articulos).code(200);
			});
        } else {
		  models.articulo.findAll()
			.then(function(articulos){
				reply(articulos).code(200);
			});
        }
	}
};
