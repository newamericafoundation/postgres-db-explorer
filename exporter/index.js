import TableConverter from './converters/table.js'

import * as convertOptions from './table_convert_settings/json_to_sql/index.js'

import writeTableSqlQueries from './writers/table_sql_query.js'

export function exportTable(key) {

	var opt = convertOptions[key]

	var tc = new TableConverter(opt)
	tc.setOriginCollection(require(`./../__exports/json/${opt.file}`))
	tc.convertCollection()

	writeTableSqlQueries(tc.results, `${key}__`)

}