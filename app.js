require('babel/register');

var express = require('express');

var router = require('./routes/index.js');

// var scripts = require('./scripts.js');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use(router);

app.listen(1848, function(err) {
	if (err) { return console.dir(err); }
	console.log('server listening');
});