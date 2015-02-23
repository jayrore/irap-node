var path = require('path');
var rootPath = path.normalize(__dirname+'/../../');
module.exports = {
	development:{
		db:'mongodb://localhost:27017/irap',
		port: process.env.PORT||3000,
		rootPath : rootPath,
		projectName: 'Codificador IRAP'
	},
	production:{
		db:'mongodb://localhost:27017/irap',
		port:process.env.PORT||80,
		rootPath : rootPath,
		projectName: 'Codificador IRAP'
	}
}