require('babel/register');

var express = require('express'),
	pg = require('pg');

var router = require('./routes/index.js');

// var scripts = require('./scripts.js');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

var conString = "postgres://localhost/newamerica";

pg.connect(conString, function(err, client, done) {

	if (err) { return console.log(err); }

	app.use(function(req, res, next) {
		req.dbClient = client;
		next();
	});

	app.use(router);

	app.listen(1848, function(err) {
		if (err) { return console.dir(err); }
		console.log('server listening');
	});

});