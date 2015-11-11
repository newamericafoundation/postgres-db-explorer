export default {

	file: 'post_authors.json',

	tableNames: [ 'term_relationships' ],

	fields: [

		{
			tableName: 'term_relationships',
			originKey: 'post_id',
			key: 'object_id'
		},

		{
			tableName: 'term_relationships',
			originKey: 'user_id',
			key: 'term_taxonomy_id'
		},

		{
			tableName: 'term_relationships',
			originKey: null,
			key: 'term_order',
			value: 0
		}

	]

};