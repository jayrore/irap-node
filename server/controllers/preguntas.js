var Pregunta = require('mongoose').model('Pregunta');

exports.getAll = function(req, res){

	Pregunta.find({},function(err, preguntas){
		res.json(preguntas);
	});

};