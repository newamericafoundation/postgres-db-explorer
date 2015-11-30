var express = require('express'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	webpack = require('webpack'),
	webpackConfig = require('./webpack.config.js'),
	pg = require('pg');

require('dotenv').load();

var webpackCompiler = webpack(webpackConfig);

var router = require('./routes/index.js');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Disable if working on server-side code. Enable if working on the client-side (client-side JavaScript bundle is made much faster that way).
app.use(webpackDevMiddleware(webpackCompiler, { lazy: false }));

app.use(express.static('public'));

pg.connect(process.env['DB_CONNECTION_STRING'], function(err, client, done) {

	if (err) { 
		console.log('There was an error connecting to the database.');
		return console.log(err); 
	}

	// Save the database client on the request object so that it is available throughout the app.
	app.use(function(req, res, next) {
		req.dbClient = client;
		next();
	});

	// Use the main router.
	app.use(router);

	app.listen(1848, function(err) {
		if (err) { return console.dir(err); }
		console.log('Server listening on port 1848.');
	});

});
