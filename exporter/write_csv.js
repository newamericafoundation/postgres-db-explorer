import json2csv from 'json2csv';
import fs from 'fs';

var PATH = 'dumps/csv';

function saveFile(data, fileName) {
	fs.writeFile(`${PATH}/${fileName}`, data, (err) => {
		if (err) { return console.log(err); }
		console.log('write success');
	});
}

export default function writeCsv(results, folderName = '') {

	var { collections, metaCollection } = results;

	if (metaCollection.length > 0) {

		json2csv({ data: metaCollection, quotes: '', del: '|' }, (err, data) => {
			if (err) { return console.log(err); }
			saveFile(data, `${folderName}/meta.csv`);
		});

	}

	for (let key in collections) {
		let collection = collections[key];
		json2csv({ data: collection, quotes: '', del: '|' }, (err, data) => {
			if (err) { return console.log(err); }
			saveFile(data, `${folderName}/${key}.csv`);
		});
	}

};