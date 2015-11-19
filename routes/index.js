var express  = require('express');
var json2csv = require('json2csv');
var fs = require('fs');

var router = express.Router();

/*
 * Render main route that serves client-side app.
 *
 */
router.get('/', function(req, res) {
	res.render('index');
})


/*
 * Returns limit and offset modifiers that are appended to a query.
 *
 */
var getCommandModifiers = function(req) {
	var limit = req.query.limit;
	var offset = req.query.offset;
	var commandModifiers = [];
	if (limit != null) { commandModifiers.push('LIMIT ' + limit) }
	if (offset != null) { commandModifiers.push('OFFSET ' + offset) }
	return commandModifiers.join(' ');
}


/*
 * Returns the contents of a table in JSON.
 *
 */
router.get('/api/v1/:table_name', function(req, res) {

	var client = req.dbClient;

	var command = 'SELECT * FROM ' + req.params.table_name;

	command += ' ' + getCommandModifiers(req);

	client.query(command, function(err, data) {
		if (err) { console.log(err); return res.json({ message: 'no turkeys' }); }
		return res.json(data.rows);
	});

})


/*
 * Save a table as JSON.
 * Takes exports_file_name query string that defaults to the table name.
 */
router.get('/api/v1/:table_name/save_json', function(req, res) {

	var client = req.dbClient;

	var command = 'SELECT * FROM ' + req.params.table_name;

	var start_id = (req.query.start_id != null) ? Number(req.query.start_id) : null,
		id_key = req.query.id_key || 'id';

	command += ' ' + getCommandModifiers(req);

	var fileName = req.params.export_file_name || req.params.table_name

	client.query(command, function(err, data) {

		var rows = data.rows;

		if (start_id != null) {
			rows.forEach(function(row, i) {
				row[id_key] = start_id + i
			})
		}

		fs.writeFile('__exports/json/' + req.params.table_name + '.json', JSON.stringify(rows), function(err) {
			  if (err) { console.log(err); return res.json({ message: 'there was an error saving the file' }); }
			return res.json({ message: 'file saved successfully' });
		});

	});

})

module.exports = router
