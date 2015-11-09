import TableConverter from './converters/table.js';

import * as convertOptions from './convert_options/index.js';

import writeTableSqlQueries from './writers/table_sql_query.js';

function exportTable() {

	var key = 'users';

	var opt = convertOptions[key];

	var tc = new TableConverter(opt);
	tc.setOriginCollection(require(`./../__exports/json/${opt.jsonDumpFile}`));
	tc.convertCollection();

	writeTableSqlQueries(tc.results, `${key}__`);

}

exportTable();