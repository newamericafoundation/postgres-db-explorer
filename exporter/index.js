import TableConverter from './converters/table.js';

import * as convertOptions from './convert_options/index.js';

import writeCsv from './write_csv.js';


function exportPostAuthors() {

	var tc = new TableConverter(convertOptions['postAuthors']);
	tc.setOriginCollection(require('./../dumps/json/post_authors.json'));
	tc.convertCollection();

	writeCsv(tc.results, 'post_authors');

};


function exportPosts() {

	var tc = new TableConverter(convertOptions['posts']);
	tc.setOriginCollection(require('./../dumps/json/posts.json'));
	tc.convertCollection();

	writeCsv(tc.results, 'posts');

};


function exportUsers() {

	var tc = new TableConverter(convertOptions['users']);
	tc.setOriginCollection(require('./../dumps/json/users.json'));
	tc.convertCollection();

	writeCsv(tc.results, 'users');

};


exportPostAuthors();