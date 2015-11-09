import fs from 'fs';
import _ from 'underscore';

// Export path
const PATH = '__exports/sql';

const TABLE_PREFIX = 'wp_';


/*
 *
 *
 */
function getSqlInsertScript(jsonData, tableName) {

	return jsonData.map((datum) => {

		var keys = Object.keys(datum);

		var keysString = keys.join(',');

		var valuesString = keys.map((key) => {

			var value = datum[key];

			if (value == null) { value = ""; }

			if (_.isString(value)) {
				value = `"${value}"`;
			}

			return value;
		}).join(',');

		return `INSERT INTO ${TABLE_PREFIX}${tableName} (${keysString}) VALUES(${valuesString});`;

	}).join('\n');

}


/*
 *
 *
 */
function writeSqlQueries(jsonData, tableName, fileNamePrefix = '') {

	var fileContent = getSqlInsertScript(jsonData, tableName);

	fs.writeFile(`${PATH}/${fileNamePrefix}${tableName}.sql`, fileContent, (err) => {
		if (err) {  return console.log(err); }
		return console.log('write success');
	});

};


export default writeSqlQueries;