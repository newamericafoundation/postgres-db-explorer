export default {

	file: 'post_type_articles.json',

	tableNames: [ 'term_relationships' ],

	fields: [

		{
			originKey: 'post_ptr_id',
			key: 'object_id'
		},

		{
			originKey: null,
			key: 'term_id',
			value: 15000
		}

	]

}