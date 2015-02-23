var mongoose = require('mongoose'),
		pregunta = require('../models/pregunta');
var conn = {count:0}; 
module.exports= function(config){
	
	var db = mongoose.connection;

	db.on('connecting', function(){
		console.log('['+ (conn.count ++) +'] Conectando a la base de datos ' + config.db );
	})

	db.on('error', function(error){
		console.log('Error en conexion a base de datos: '+ error);
		mongoose.disconnect();
	});

	db.on('disconnected', function(){
		console.log('Desconectado de la base de datos');
		mongoose.connect(config.db, {server:{auto_reconnect:true}});
	})

	db.on('connected', function(){
		console.log('Conectado al servidor Mongodb')
	});

	db.once('open', function() {
	  console.log('Base de datos abierta'+ config.db);
	});

	db.on('reconnected', function(){
		console.log('Reconectado  a la base  de datos');
	});

	mongoose.connect(config.db,{server:{auto_reconnect: true }});

};


