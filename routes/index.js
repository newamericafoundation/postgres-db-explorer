import pg from 'pg';
import express from 'express';

var conString = "postgres://localhost/newamerica";

var router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/api/v1/:table_name', (req, res) => {

	pg.connect(conString, function(err, client, done) {

		if (err) { return console.log(err); }

		var command = `SELECT * FROM ${req.params.table_name}`;

		var { limit, offset } = req.query;

		if (limit != null) { command += ` LIMIT ${limit}`; }
		if (offset != null) { command += ` OFFSET ${offset}`; }	

		client.query(command, (err, data) => {
			if (err) { return res.json({ message: 'no turkeys' }); }
			res.json(data.rows);
			return client.end();
		});

	});

});

router.get('/api/v1/:table_name/info', (req, res) => {

	pg.connect(conString, function(err, client, done) {

		if (err) { return console.log(err); }

		var command = `\\d ${req.params.table_name}`;

		client.query(command, (err, data) => {
			if (err) { console.log(err); return res.json({ message: 'no turkeys' }); }
			res.json(data);
			return client.end();
		});

	});

});

export default router;