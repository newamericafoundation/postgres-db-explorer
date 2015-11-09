require('babel/register');

var express = require('express'),
	pg = require('pg'),
	dbConnect = require('./db_info/db_connect.json');

var router = require('./routes/index.js');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

// Build Postgres connection string.
var connectionString = "postgres://" + dbConnect.host + "/" + dbConnect.dbName;

pg.connect(connectionString, function(err, client, done) {

	if (err) { return console.log(err); }

	// Save the database client on the request object so that it is available throughout the app.
	app.use(function(req, res, next) {
		req.dbClient = client;
		next();
	});

	// Use the main router.
	app.use(router);

	app.listen(1848, function(err) {
		if (err) { return console.dir(err); }
		console.log('server listening');
	});

});