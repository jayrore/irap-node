var api = require('../routes/api')();
var admin = require('../routes/admin')();



module.exports = function(app){

	app.use('/api',api);
	app.use('/admin',admin);

	
	// INDEX - lista de carreteras a caturar
	app.get('/',function(req, res){
		res.status(200);
		res.json({proposito: "Lista de carreteras a capturar "});
	});

	// Codificador
	app.get('/coder', function(req, res){
		res.status(200);
		res.render('coder/index',{title: "app Codificador"});
	});

	// Redireccion por default
	app.get('*', function(req, res) {
		console.log(req.user);
	  res.redirect('/');
	});

};