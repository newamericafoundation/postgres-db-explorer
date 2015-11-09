import writeSqlQuery from './sql_query.js';


export default function writeTableSqlQuery(tableJsonData, fileNamePrefix = '') {

	var { collections, metaCollection } = tableJsonData;

	for (let key in collections) {

		let coll = collections[key];
		writeSqlQuery(coll, key, fileNamePrefix);

	}

	if (metaCollection) {
		writeSqlQuery(metaCollection, 'meta', fileNamePrefix);
	}

};