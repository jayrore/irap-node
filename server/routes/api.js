var express = require('express');
var router = express.Router();

var preguntas = require('../controllers/preguntas');

module.exports = function(){
	
	/* Lista de preguntas */
	router.get('/preguntas', preguntas.getAll);
  
  

	return router; 
};