var express 	= require('express');
var app     	= express();
var http 		= require('http').Server(app);
var dbconnect   = require('./db_connection');
var bodyParser 	= require('body-parser');

app.use(require('./route/web'));

app.set('port',  3000);
http.listen(app.get('port'), function(){
  console.log('Express Chat Server starts it"s run with port ' + app.get('port'));
});