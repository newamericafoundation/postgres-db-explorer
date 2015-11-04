export default {

	originTableName: 'doc_cms_user',

	destinationTableName: 'wp_rxlk_users',

	originIdKey: 'id',

	foreignIdKey: 'user_id',

	tableNames: [ 'users', 'terms', 'term_taxonomies' ],

	fields: [

		{
			originKey: 'id',
			tableName: 'users',
			key: 'ID'
		},

		{
			originKey: null,
			key: 'password',
			tableName: 'users',
			value: '$asdffdsaasdf1999oopp'
		},

		{
			originKey: 'email',
			key: 'user_login',
			tableName: 'users',
			converterKey: 'emailToLogin'
		},

		{
			originKey: 'email',
			key: 'user_nicename',
			tableName: 'users',
			converterKey: 'emailToLogin'
		},

		{
			originKey: 'email',
			key: 'user_email',
			tableName: 'users',
		},

		{
			originKey: 'full_name',
			key: 'display_name',
			tableName: 'users',
		},

		{
			originKey: null,
			key: 'user_status',
			tableName: 'users',
			value: 0
		},

		{
			originKey: 'full_name',
			isMeta: true,
			key: 'first_name',
			converterKey: 'fullNameToFirstName'
		},

		{
			originKey: 'full_name',
			key: 'last_name',
			isMeta: true,
			converterKey: 'fullNameToLastName'
		},

		{
			originKey: 'twitter',
			key: 'twitter',
			isMeta: true,
			converterKey: 'twitterHandleToLink'
		},




		{
			originKey: 'id',
			tableName: 'terms',
			key: 'term_id',
			converterKey: null
		},

		{
			originKey: 'id',
			tableName: 'terms',
			key: 'term_id',
			converterKey: null
		},

		{
			originKey: 'id',
			tableName: 'term_taxonomies',
			key: 'term_taxonomy_id',
			converterKey: null
		},

		{
			originKey: 'id',
			tableName: 'term_taxonomies',
			key: 'term_id',
			converterKey: null
		},

		{
			originKey: 'email',
			tableName: 'terms',
			key: 'name',
			converterKey: 'emailToLogin'
		},

		{
			originKey: 'email',
			tableName: 'terms',
			key: 'slug',
			converterKey: 'emailToLoginWithPrefix',
			converterOptions: { prefix: 'cap-' }
		},

		{
			originKey: null,
			tableName: 'term_taxonomies',
			key: 'taxonomy',
			value: 'author'
		}

	]

};