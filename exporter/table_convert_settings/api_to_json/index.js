// import tableInfo from './../../../db_info/tables.js'

// var scripts = []

// tableInfo.forEach(function(item) {
// 	var queries = []
// 	var { export_file_name, start_id } = item
// 	if (export_file_name) {
// 		queries.push(`export_file_name=${export_file_name}`)
// 	}
// 	if (item.start_id) {
// 		queries.push(`start_id=${start_id}`)
// 	}
// 	var script = `/api/v1/${item.name}/save_json?${queries.join('&')}`
// 	scripts.push(script)
// })

// console.log(scripts)

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _db_infoTablesJs = require('./../../../db_info/tables.js');

var _db_infoTablesJs2 = _interopRequireDefault(_db_infoTablesJs);

var scripts = [];

_db_infoTablesJs2['default'].forEach(function (item) {
	var queries = [];
	var export_file_name = item.export_file_name;
	var start_id = item.start_id;

	if (export_file_name) {
		queries.push('export_file_name=' + export_file_name);
	}
	if (item.start_id) {
		queries.push('start_id=' + start_id);
	}
	var script = '/api/v1/' + item.name + '/save_json?' + queries.join('&');
	scripts.push(script);
});

console.log(scripts);