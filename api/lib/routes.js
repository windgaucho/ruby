var api = require('./api');

module.exports = [
	{
		method: 'GET',
		path: '/api/articulos',
		handler: api.articulos.all
	}    
];
