var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

/* enviroment config*/
var config = require('./server/config/config')[env];

/* Express application config */
require('./server/config/express')(app,config);

/* Mongoose config */
require('./server/config/mongoose')(config);

/* Authentication config*/
//require('./server/config/passport')();

/* Router config*/
require('./server/config/routes')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');