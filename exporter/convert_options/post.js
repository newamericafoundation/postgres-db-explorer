export default {

	originTableName: 'doc_cms_post',

	originIdKey: 'id',

	foreignIdKey: 'post_id',

	tableNames: [ 'posts' ],

	fields: [

		{
			originKey: 'id',
			tableName: 'posts',
			key: 'ID'
		},

		{
			originKey: null,
			tableName: 'posts',
			key: 'menu_order',
			value: 0
		},

		{
			originKey: 'title',
			tableName: 'posts',
			key: 'post_title'
		},

		{
			originKey: 'sub_headline',
			tableName: 'posts',
			isMeta: true,
			key: '_subheading'
		},

		{
			tableName: 'posts',
			originKey: 'created',
			key: 'post_date',
			converterKey: 'time'
		},

		{
			tableName: 'posts',
			originKey: 'created',
			key: 'post_data_gmt',
			converterKey: 'time'
		},

		{
			tableName: 'posts',
			originKey: 'modified',
			key: 'post_modified',
			converterKey: 'time'
		},

		{
			tableName: 'posts',
			originKey: 'modified',
			key: 'post_modified_gmt',
			converterKey: 'time'
		},

		{
			tableName: 'posts',
			originKey: 'summary',
			key: 'post_exerpt',
			converterKey: 'replacePattern',
			converterOptions: { pattern: '\\|', replacement: '&#124;' }
		},

		{
			tableName: 'posts',
			originKey: 'content',
			key: 'post_content',
			converterKey: 'replacePatterm',
			converterOptions: { pattern: '\\|', replacement: '&#124;' }
		}

	]

};