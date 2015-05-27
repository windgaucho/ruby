var Hapi = require('hapi');
var models = require('./models');

var server = new Hapi.Server({
    connections: {
        routes: {
            cors: true
        }
    }
});

server.connection({port : 3000});

server.route(require('./lib/routes'));

models.sequelize.sync().then(function(){
	server.start(function(){
		console.log('Server corriendo en puerto 3000');
	});	
});

