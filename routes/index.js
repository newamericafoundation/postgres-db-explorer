import pg from 'pg';
import express from 'express';
import json2csv from 'json2csv';

var conString = "postgres://localhost/newamerica";

var router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

var getCommandModifiers = (req) => {

	var { limit, offset } = req.query;

	var commandModifiers = [];

	if (limit != null) { commandModifiers.push(`LIMIT ${limit}`); }
	if (offset != null) { commandModifiers.push(`OFFSET ${offset}`); }

	return commandModifiers.join(' ');

};

router.get('/api/v1/:table_name', (req, res) => {

	var client = req.dbClient;

	var command = `SELECT * FROM ${req.params.table_name}`;

	command += ' ' + getCommandModifiers(req);

	console.log(command);

	client.query(command, (err, data) => {
		if (err) { console.log(err); return res.json({ message: 'no turkeys' }); }
		return res.json(data.rows);
	});


});

router.get('/api/v1/:table_name/info', (req, res) => {

	var client = req.dbClient;

	var command = `\\d ${req.params.table_name}`;

	client.query(command, (err, data) => {
		if (err) { console.log(err); return res.json({ message: 'no turkeys' }); }
		return res.json(data);
	});

});

router.get('/csv/v1/:table_name', (req, res) => {

	var client = req.dbClient;

	var command = `SELECT * FROM ${req.params.table_name}`;

	command += ' ' + getCommandModifiers(req);

	client.query(command, (err, data) => {
		if (err) { console.log(err); return res.json({ message: 'no turkeys' }); }
		data = data.rows;
		json2csv({data: data}, (err, csv) => {
			if (err) { return res.send(err); }
			res.send(csv);
		});
	});

});

export default router;