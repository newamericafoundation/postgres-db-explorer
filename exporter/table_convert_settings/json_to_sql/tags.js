export default {

	file: 'posts.json',

	originIdKey: 'id',
	
	foreignIdKey: 'post_id',

	tableNames: [ 'posts' ],

	fields: [

		{
			originKey: 'slug',
			key: 'slig'
		},

		{
			originKey: 'verbose_name',
			key: 'name'
		}

	]

}